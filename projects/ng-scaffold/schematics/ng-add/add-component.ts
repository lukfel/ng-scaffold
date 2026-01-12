/**
 * Check for root module or main.ts if standalone and import the library component
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

export function addComponent(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('[Component] Searching for bootstrapper ...');

        const possibleModulePaths = [
            'src/app/app.module.ts',
            'src/app/app-module.ts'
        ];

        const modulePath = possibleModulePaths.find(p => tree.exists(p));
        if (modulePath) {
            return addToNgModule(tree, context, modulePath);
        }

        const possibleComponentPaths = [
            'src/app/app.component.ts',
            'src/app/app.ts'
        ];

        const componentPath = possibleComponentPaths.find(p => tree.exists(p));
        if (componentPath) {
            return addToNgModule(tree, context, componentPath);
        }

        context.logger.warn('[Component] No bootstrapper file found. Skipping.');
        return tree;
    };
}

/** Add ScaffoldComponent to NgModule app */
function addToNgModule(tree: Tree, context: SchematicContext, path: string): Tree {
    const text = tree.read(path)!.toString('utf-8');
    if (text.includes('ScaffoldComponent')) {
        context.logger.info('[Component] ScaffoldComponent already imported. Skip.');
        return tree;
    }

    const isModule = path.includes('module');

    const recorder = tree.beginUpdate(path);
    recorder.insertLeft(0, 'import { ScaffoldComponent } from \'@lukfel/ng-scaffold\';\n');

    const sourceFile = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
    const ngModuleDecoratorCall = findDecorator(sourceFile, isModule ? 'NgModule' : 'Component');

    if (!ngModuleDecoratorCall) {
        context.logger.warn(`[Component] No ${isModule ? '@NgModule' : '@Component'} decorator found. Skip.`);
        tree.commitUpdate(recorder);
        return tree;
    }

    const arg = ngModuleDecoratorCall.arguments[0];
    if (!arg || !ts.isObjectLiteralExpression(arg)) {
        context.logger.warn(`[Component] Invalid ${isModule ? '@NgModule' : '@Component'} metadata. Skip.`);
        tree.commitUpdate(recorder);
        return tree;
    }

    const importsProp = arg.properties.find(
        p => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'imports'
    ) as ts.PropertyAssignment | undefined;

    if (!importsProp || !ts.isArrayLiteralExpression(importsProp.initializer)) {
        context.logger.warn(`[Component] No imports[] found in ${isModule ? '@NgModule' : '@Component'} Skip.`);
        tree.commitUpdate(recorder);
        return tree;
    }

    const importsArray = importsProp.initializer;
    const fileText = sourceFile.getFullText();

    const startPos = importsArray.getStart();
    const lineStart = fileText.lastIndexOf('\n', startPos) + 1;
    const indent = fileText.slice(lineStart, startPos).match(/^\s*/)?.[0] ?? '  ';

    const prefix = importsArray.elements.length ? ',\n' + indent : '\n' + indent;

    const pos = importsArray.end - 1;
    recorder.insertLeft(pos, `${prefix}ScaffoldComponent`);

    tree.commitUpdate(recorder);
    context.logger.info('[Component] Successfully added ScaffoldComponent.');
    return tree;
}

/** Helper to find @NgModule or @Component decorator in a class */
function findDecorator(sourceFile: ts.SourceFile, type: 'NgModule' | 'Component'): ts.CallExpression | null {
    const classes = sourceFile.statements.filter(ts.isClassDeclaration);

    for (const cls of classes) {
        const decorators = ts.getDecorators(cls) ?? [];
        for (const decorator of decorators) {
            if (!ts.isCallExpression(decorator.expression)) continue;
            const expr = decorator.expression;
            if (ts.isIdentifier(expr.expression) && expr.expression.text === type) {
                return expr;
            }
        }
    }

    return null;
}