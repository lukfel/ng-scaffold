/**
 * Wraps a root template with <lf-scaffold> … </lf-scaffold>
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function addTemplate(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('[Template] Searching for root template ...');

    const possiblePaths = [
      'src/app/app.component.html',
      'src/app/app.html'
    ];

    const path = possiblePaths.find(p => tree.exists(p)) ?? null;
    if (!path) {
      context.logger.warn('[Template] No global template file found. Skipped.');
      return tree;
    }

    const content = tree.read(path)!.toString('utf8').trim();

    if (content.includes('<lf-scaffold')) {
      context.logger.info('[Template] Template already added. Skipped.');
      return tree;
    }

    const indented = content.split('\n').map(line => (line.trim() === '' ? line : '  ' + line)).join('\n');
    const newContent = '<lf-scaffold>\n' + `${indented}\n` + '</lf-scaffold>\n';
    tree.overwrite(path, newContent);
    context.logger.info('[Template] Successfully added.');

    return tree;
  };
}