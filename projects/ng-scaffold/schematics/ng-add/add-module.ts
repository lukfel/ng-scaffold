import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';
import { getTsSourceFile } from './ts-ast-utils';

export function addModule(): Rule {
    return (tree: Tree) => {
        const mainPaths = ['src/main.ts', 'main.ts'];
        let mainPath: string | undefined;

        for (const p of mainPaths) {
            if (tree.exists(p)) {
                mainPath = p;
                break;
            }
        }

        // --- 1) Standalone bootstrap ---
        if (mainPath) {
            const sourceFile = getTsSourceFile(tree, mainPath);
            if (!sourceFile) throw new SchematicsException(`Could not read ${mainPath}`);
            const content = tree.read(mainPath)!.toString('utf-8');

            if (!content.includes('@lukfel/ng-scaffold')) {
                const importStatements = sourceFile.statements.filter(s => ts.isImportDeclaration(s));
                const insertPos = importStatements.length ? importStatements[importStatements.length - 1].end + 1 : 0;
                const recorder = tree.beginUpdate(mainPath);
                recorder.insertLeft(insertPos, 'import { ScaffoldModule } from \'@lukfel/ng-scaffold\';\n');
                tree.commitUpdate(recorder);
            }
            return tree;
        }

        // --- 2) NgModule ---
        const modulePaths = ['src/app/app.module.ts', 'app.module.ts'];
        for (const mp of modulePaths) {
            if (!tree.exists(mp)) continue;
            const sourceFile = getTsSourceFile(tree, mp);
            if (!sourceFile) continue;
            let content = tree.read(mp)!.toString('utf-8');

            // Add import if missing
            if (!content.includes('@lukfel/ng-scaffold')) {
                const importStatements = sourceFile.statements.filter(s => ts.isImportDeclaration(s));
                const insertPos = importStatements.length ? importStatements[importStatements.length - 1].end + 1 : 0;
                const recorder = tree.beginUpdate(mp);
                recorder.insertLeft(insertPos, 'import { ScaffoldModule } from \'@lukfel/ng-scaffold\';\n');
                tree.commitUpdate(recorder);
                content = tree.read(mp)!.toString('utf-8');
            }

            // Add ScaffoldModule to imports array
            const importsMatch = /imports\s*:\s*\[([\s\S]*?)\]/m.exec(content);
            if (importsMatch) {
                const arrayStart = content.indexOf('[', importsMatch.index) + 1;
                const recorder = tree.beginUpdate(mp);
                recorder.insertLeft(arrayStart, ' ScaffoldModule,');
                tree.commitUpdate(recorder);
                return tree;
            }
            // No imports array: insert one
            const ngModuleMatch = /@NgModule\s*\(\s*\{/.exec(content);
            if (ngModuleMatch) {
                const insertPos = ngModuleMatch.index + ngModuleMatch[0].length;
                const recorder = tree.beginUpdate(mp);
                recorder.insertLeft(insertPos, '\n  imports: [ScaffoldModule],');
                tree.commitUpdate(recorder);
                return tree;
            }

        }

        throw new SchematicsException('Could not find main.ts or app.module.ts to add ScaffoldModule');
    };
}
