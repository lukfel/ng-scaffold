import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

const SNIPPET = `
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

// Define themes (uses Material palettes)
$base-theme: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  warn: mat.m2-define-palette(mat.$m2-red-palette),
  dark: false,
  font-family: 'Roboto'
);

$theme2: (
  primary: mat.m2-define-palette(mat.$m2-pink-palette),
  accent: mat.m2-define-palette(mat.$m2-blue-palette),
  dark: true
);

// Include themes (use ThemeService to switch between themes)
@include lf.scaffold-theme($base-theme);
@include lf.scaffold-colors($theme2, 'theme2');

`;

export function addStyles(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.info('[Styles] Searching for root styles ...');

        const possiblePaths = [
            'src/styles.scss',
            'src/styles.sass',
            'src/styles.css',
            'src/styles.css.scss',
            'styles.scss'
        ];

        const path = possiblePaths.find(p => tree.exists(p));
        if (!path) {
            context.logger.warn('[Styles] No global styles file found. Skip.');
            return tree
        };

        const content = tree.read(path)!.toString('utf-8');
        if (content.includes('@lukfel/ng-scaffold/styles') || content.includes('lf.scaffold-theme')) {
            context.logger.info('[Styles] Styles already added. Skip.');
            return tree;
        }

        const recorder = tree.beginUpdate(path);
        recorder.insertLeft(0, SNIPPET);
        tree.commitUpdate(recorder);
        context.logger.info('[Styles] Successfully added.');
        return tree;
    };
}
