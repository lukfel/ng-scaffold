import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import * as ts from 'typescript';

function detectBootstrapComponent(tree: Tree): { className: string, filePath: string } | null {
  // simplified detection: main.ts (standalone) or AppModule
  const mainPaths = ['src/main.ts', 'main.ts'];
  for (const mp of mainPaths) {
    if (!tree.exists(mp)) continue;
    const text = tree.read(mp)!.toString('utf-8');
    // eslint-disable-next-line no-useless-escape
    const match = /bootstrapApplication\(([^,\)]+)/.exec(text);
    if (match) {
      const className = match[1].trim();
      const importMatch = new RegExp(`import\\s+\\{?\\s*${className}\\s*\\}?\\s+from\\s+['"](.*)['"]`).exec(text);
      if (importMatch) {
        const importPath = importMatch[1].startsWith('.') ? importMatch[1] : `./${importMatch[1]}`;
        const filePath = `src/${importPath.replace(/^\.\/+/, '')}.ts`;
        if (tree.exists(filePath)) return { className, filePath };
      }
    }
  }

  const modulePaths = ['src/app/app.module.ts', 'app.module.ts'];
  for (const mp of modulePaths) {
    if (!tree.exists(mp)) continue;
    const text = tree.read(mp)!.toString('utf-8');
    const match = /bootstrap\s*:\s*\[([^\]]+)\]/.exec(text);
    if (match) {
      const className = match[1].split(',')[0].trim();
      const importMatch = new RegExp(`import\\s+\\{?\\s*${className}\\s*\\}?\\s+from\\s+['"](.*)['"]`).exec(text);
      if (importMatch) {
        const importPath = importMatch[1].startsWith('.') ? importMatch[1] : `./${importMatch[1]}`;
        const filePath = `src/${importPath.replace(/^\.\/+/, '')}.ts`;
        if (tree.exists(filePath)) return { className, filePath };
      }
    }
  }

  return null;
}

export function addTemplate(): Rule {
  return (tree: Tree) => {
    const detected = detectBootstrapComponent(tree);
    if (!detected) throw new SchematicsException('Could not detect bootstrap component');

    const { className, filePath } = detected;
    if (!tree.exists(filePath)) throw new SchematicsException(`Component file not found: ${filePath}`);

    const content = tree.read(filePath)!.toString('utf-8');
    const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    const recorder = tree.beginUpdate(filePath);
    let modified = false;

    function visit(node: ts.Node): void {
      if (ts.isClassDeclaration(node) && node.name?.text === className) {
        // ✅ Correct type assertion for decorators
        const decorators = (node as ts.ClassDeclaration & { decorators?: ts.NodeArray<ts.Decorator> }).decorators;
        if (!decorators) return;

        const componentDecorator = decorators.find(d => d.getText(sourceFile).startsWith('@Component'));
        if (!componentDecorator) return;

        const decoratorText = componentDecorator.getFullText(sourceFile);

        // templateUrl
        const templateUrlMatch = /templateUrl\s*:\s*['"`](.*?)['"`]/.exec(decoratorText);
        if (templateUrlMatch) {
          const templatePathRaw = templateUrlMatch[1];
          // eslint-disable-next-line no-useless-escape
          const compDir = filePath.replace(/\/[^\/]+$/, '');
          let templatePath = templatePathRaw.startsWith('./')
            ? `${compDir}/${templatePathRaw.slice(2)}`
            : `${compDir}/${templatePathRaw}`;
          if (!tree.exists(templatePath)) templatePath += '.html';
          if (!tree.exists(templatePath)) throw new SchematicsException(`Template not found: ${templatePath}`);
          const html = tree.read(templatePath)!.toString('utf-8');
          if (!html.includes('<lf-scaffold>')) {
            recorder.remove(0, html.length);
            recorder.insertLeft(0, `<lf-scaffold>\n${html}\n</lf-scaffold>`);
            modified = true;
          }
        } else {
          // inline template
          const templateMatch = /template\s*:\s*(`([\s\S]*?)`|['"`]([\s\S]*?)['"`])/.exec(decoratorText);
          if (templateMatch) {
            const inner = templateMatch[2] ?? templateMatch[3] ?? '';
            const start = content.indexOf(inner);
            if (start !== -1) {
              recorder.remove(start, inner.length);
              recorder.insertLeft(start, `<lf-scaffold>\n${inner}\n</lf-scaffold>`);
              modified = true;
            }
          }
        }
      } else {
        ts.forEachChild(node, visit);
      }
    }

    visit(sourceFile);

    if (modified) tree.commitUpdate(recorder);

    return tree;
  };
}
