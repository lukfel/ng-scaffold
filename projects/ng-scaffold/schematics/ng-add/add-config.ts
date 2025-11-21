/**
 * Check for root component and set the initial library config
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

export function addConfig(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('[Config] Searching for root component ...');

        const possiblePaths = [
            'src/app/app.component.ts',
            'src/app/app.ts'
        ];

        const filePath = possiblePaths.find(p => tree.exists(p));
        if (!filePath) {
            context.logger.warn('[Config] No root component file found. Skipping.');
            return tree;
        }

        const content = tree.read(filePath)!.toString('utf-8');
        if (content.includes('from \'@lukfel/ng-scaffold\'')) {
            context.logger.info('[Config] Config already added. Skip.');
            return tree;
        }

        const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
        const recorder = tree.beginUpdate(filePath);

        // Add imports if missing
        if (!content.includes('from \'@lukfel/ng-scaffold\'')) {
            context.logger.info('[Config] Adding config import ...');
            recorder.insertLeft(0, 'import { ScaffoldConfig, ScaffoldService } from \'@lukfel/ng-scaffold\';\n');
        }
        if (!content.includes('inject')) {
            context.logger.info('[Config] Adding inject import ...');
            recorder.insertLeft(0, 'import { inject } from \'@angular/core\';\n');
        }

        const classNode = findFirstClass(sourceFile);
        if (!classNode) {
            context.logger.warn('[Config] Could not find any class in the root component. Skipping.');
            return tree;
        }

        const className = classNode.name?.text ?? '<unknown>';
        context.logger.info(`[Config] Modifying class ${className}`);

        // Always inject ScaffoldService at class level
        if (!content.includes('scaffoldService = inject(ScaffoldService)')) {
            recorder.insertLeft(classNode.members.pos,
                `  private scaffoldService = inject(ScaffoldService);
  private scaffoldConfig: ScaffoldConfig = {
    // Create your own config or generate it at https://lukfel.github.io/ng-scaffold
  };
`);
        }

        // Ensure constructor exists and sets scaffoldConfig
        const constructorNode = classNode.members.find(ts.isConstructorDeclaration);
        if (constructorNode) {
            const bodyText = constructorNode.body!.getFullText(sourceFile);
            if (!bodyText.includes('this.scaffoldService.scaffoldConfig')) {
                recorder.insertLeft(constructorNode.body!.getEnd() - 1,
                    `    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
`);
            }
        } else {
            // Add a constructor if none exists
            recorder.insertLeft(classNode.members.pos + (content.includes('private scaffoldService') ? 0 : 0),
                `  constructor() {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
  }
`);
        }

        tree.commitUpdate(recorder);
        context.logger.info('[Config] ScaffoldService configuration added successfully.');

        return tree;
    };
}

// Helper: find the first class declaration
function findFirstClass(sourceFile: ts.SourceFile): ts.ClassDeclaration | undefined {
    let classNode: ts.ClassDeclaration | undefined;
    function visit(node: ts.Node): void {
        if (ts.isClassDeclaration(node)) {
            classNode = node;
        } else ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return classNode;
}