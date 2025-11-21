import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addTemplate(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('[Template] Searching for root template ...');

        const possiblePaths = [
            'src/app/app.component.html',
            'src/app/app.html'
        ];

        const path = possiblePaths.find(p => tree.exists(p));
        if (!path) {
            context.logger.warn('[Template] No global template file found. Skip.');
            return tree;
        }

        const content = tree.read(path)!.toString('utf8');
        if (content.includes('<lf-scaffold')) {
            context.logger.info('[Template] Template already added. Skip.');
            return tree;
        }

        const newContent = `<lf-scaffold>\n${content}\n</lf-scaffold>`;
        tree.overwrite(path, newContent);
        context.logger.info(`[Template] Successfully added ${path}.`);
        return tree;
    };
}
