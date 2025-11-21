/**
 * Check for root module or main.ts if standalone and import the library module
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

export function addModule(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('[Module] Searching for root module ...');

        const possiblePaths = [
            'src/app/app.module.ts',
            'src/app/app-module.ts'
        ];

        const path = possiblePaths.find(p => tree.exists(p));
        if (path) {
            return addToNgModule(tree, context, path);
        }

        return addToStandalone(tree, context);
    };
}

/** Add ScaffoldModule to NgModule app */
function addToNgModule(tree: Tree, context: SchematicContext, path: string): Tree {
    const text = tree.read(path)!.toString('utf-8');
    if (text.includes('ScaffoldModule')) {
        context.logger.info('[Module] ScaffoldModule already imported. Skip.');
        return tree;
    }

    const recorder = tree.beginUpdate(path);
    recorder.insertLeft(0, 'import { ScaffoldModule } from \'@lukfel/ng-scaffold\';\n');

    const sourceFile = ts.createSourceFile(path, text, ts.ScriptTarget.Latest, true);
    const ngModuleDecoratorCall = findNgModuleDecorator(sourceFile);

    if (!ngModuleDecoratorCall) {
        context.logger.warn('[Module] No @NgModule decorator found. Skip.');
        tree.commitUpdate(recorder);
        return tree;
    }

    const arg = ngModuleDecoratorCall.arguments[0];
    if (!arg || !ts.isObjectLiteralExpression(arg)) {
        context.logger.warn('[Module] Invalid @NgModule metadata. Skip.');
        tree.commitUpdate(recorder);
        return tree;
    }

    const importsProp = arg.properties.find(
        p => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'imports'
    ) as ts.PropertyAssignment | undefined;

    if (!importsProp || !ts.isArrayLiteralExpression(importsProp.initializer)) {
        context.logger.warn('[Module] No imports[] found in @NgModule. Skip.');
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
    recorder.insertLeft(pos, `${prefix}ScaffoldModule`);

    tree.commitUpdate(recorder);
    context.logger.info('[Module] Successfully added ScaffoldModule to NgModule.');
    return tree;
}

/** Helper to find @NgModule decorator in a class */
function findNgModuleDecorator(sourceFile: ts.SourceFile): ts.CallExpression | null {
    const classes = sourceFile.statements.filter(ts.isClassDeclaration);

    for (const cls of classes) {
        const decorators = ts.getDecorators(cls) ?? [];
        for (const decorator of decorators) {
            if (!ts.isCallExpression(decorator.expression)) continue;
            const expr = decorator.expression;
            if (ts.isIdentifier(expr.expression) && expr.expression.text === 'NgModule') {
                return expr;
            }
        }
    }

    return null;
}

/** Add ScaffoldModule to standalone bootstrapApplication */
function addToStandalone(tree: Tree, context: SchematicContext): Tree {
    const path = 'src/main.ts';
    if (!tree.exists(path)) {
        context.logger.warn('[Module] main.ts not found. Skip.');
        return tree;
    }

    const text = tree.read(path)!.toString('utf8');
    if (text.includes('ScaffoldModule')) {
        context.logger.info('[Module] ScaffoldModule already imported. Skip.');
        return tree;
    }

    const importText = `
import { importProvidersFrom } from '@angular/core';
import { ScaffoldModule } from '@lukfel/ng-scaffold';

`;

    const recorder = tree.beginUpdate(path);
    recorder.insertLeft(0, importText);

    const providersRegex = /providers\s*:\s*\[([\s\S]*?)\]/;
    const match = text.match(providersRegex);

    if (match) {
        const full = match[0];
        const inner = match[1];

        const trimmed = inner.trim();
        const prefix = trimmed.length ? trimmed + ', ' : '';
        const newInner = prefix + 'importProvidersFrom(ScaffoldModule)';
        const updated = full.replace(inner, newInner);

        const newText = text.replace(full, updated);
        recorder.remove(0, text.length);
        recorder.insertLeft(0, newText);

        tree.commitUpdate(recorder);
        context.logger.info('[Module] Added ScaffoldModule to standalone providers.');
        return tree;
    }

    context.logger.warn('[Module] No providers[] found in bootstrapApplication. Skip.');
    tree.commitUpdate(recorder);
    return tree;
}