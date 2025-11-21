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

        const constructorNode = classNode.members.find(ts.isConstructorDeclaration);

        if (constructorNode) {
            const paramExists = constructorNode.parameters.some(p =>
                p.type?.getText(sourceFile).includes('ScaffoldService')
            );
            if (!paramExists) {
                const ctorStart = constructorNode.getStart(sourceFile);
                const ctorText = constructorNode.getFullText(sourceFile);
                const insertPos = ctorStart + ctorText.indexOf('(') + 1;
                recorder.insertLeft(insertPos, 'private scaffoldService: ScaffoldService, ');
            }

            const bodyStart = constructorNode.body!.getStart(sourceFile);
            const bodyEnd = constructorNode.body!.getEnd();
            const bodyText = content.slice(bodyStart, bodyEnd);
            if (!bodyText.includes('this.scaffoldService.scaffoldConfig')) {
                recorder.insertLeft(bodyEnd - 1, '\n    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;\n');
            }
        } else {
            const classStart = classNode.getStart(sourceFile);
            const classHeaderEnd = content.indexOf('{', classStart) + 1;
            const snippet = `
private scaffoldService = inject(ScaffoldService);
private scaffoldConfig: ScaffoldConfig = {
// Create your own config or generate it at https://lukfel.github.io/ng-scaffold
};

constructor() {
    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
}
`;
            recorder.insertLeft(classHeaderEnd, snippet);
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
