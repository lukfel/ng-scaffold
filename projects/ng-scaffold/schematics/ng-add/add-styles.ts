/**
 * Check for root style file and add the necessary styles on top
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import type { Schema } from './schema';

const M3_SNIPPET = `
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

// Define themes (use Material palettes or create your own)
// 'theme-type' takes 'light', 'dark' or 'color-scheme' (follows the OS setting)
$base-theme: (
  primary: mat.$rose-palette,
  tertiary: mat.$blue-palette,
  theme-type: light,
  font-family: 'Roboto'
);

$theme2: (
  primary: mat.$rose-palette,
  tertiary: mat.$blue-palette,
  theme-type: dark
);

// Include themes (use ThemeService to switch between themes)
@include lf.scaffold-theme-m3($base-theme);
@include lf.scaffold-colors-m3($theme2, 'theme2');

`;

const M2_SNIPPET = `
@use "@lukfel/ng-scaffold/styles" as lf;
@use '@angular/material' as mat;

// Define themes (use Material palettes or create your own)
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
@include lf.scaffold-theme-m2($base-theme);
@include lf.scaffold-colors-m2($theme2, 'theme2');

`;

export function addStyles(options: Schema = {}): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const useM2 = options.materialVersion === 'm2';

    context.logger.info(`[Styles] Searching for root styles (Material ${useM2 ? '2' : '3'}) ...`);

    const possiblePaths = ['src/styles.scss', 'src/styles.sass', 'src/styles.css'];

    const path = possiblePaths.find((p) => tree.exists(p));
    if (!path) {
      context.logger.warn('[Styles] No global styles file found. Skip.');
      return tree;
    }

    const content = tree.read(path)!.toString('utf-8');
    if (content.includes('@lukfel/ng-scaffold/styles') && content.includes('lf.scaffold-theme')) {
      context.logger.info('[Styles] Styles already added. Skip.');
      return tree;
    }

    const recorder = tree.beginUpdate(path);
    recorder.insertLeft(0, useM2 ? M2_SNIPPET : M3_SNIPPET);
    tree.commitUpdate(recorder);
    context.logger.info('[Styles] Successfully added.');
    return tree;
  };
}
