import { Rule, Tree } from '@angular-devkit/schematics';

const SNIPPET = `
@use "@lukfel/ng-scaffold/styles" as lf;
// Create a base theme and include it with @include lf.scaffold-theme($base-theme);
// Include additional themes with @include lf.scaffold-colors($theme2, 'theme2');

`;

export function addStyles(): Rule {
    return (tree: Tree) => {
        const possiblePaths = [
            'src/styles.scss',
            'src/styles.sass',
            'src/styles.css',
            'src/styles.css.scss',
            'styles.scss'
        ];

        const path = possiblePaths.find(p => tree.exists(p));
        if (!path) return tree;

        const content = tree.read(path)!.toString('utf-8');
        if (content.includes('@lukfel/ng-scaffold/styles') || content.includes('lf.scaffold-theme')) {
            return tree; // already added
        }

        const recorder = tree.beginUpdate(path);
        recorder.insertLeft(content.length, SNIPPET);
        tree.commitUpdate(recorder);
        return tree;
    };
}
