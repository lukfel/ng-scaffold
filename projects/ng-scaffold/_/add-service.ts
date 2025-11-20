// import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
// import * as ts from 'typescript';

// function detectBootstrapComponent(tree: Tree): { className: string, filePath: string } | null {
//   // Reuse the same detection logic as addTemplate
//   const mainPaths = ['src/main.ts', 'main.ts'];
//   for (const mp of mainPaths) {
//     if (!tree.exists(mp)) continue;
//     const text = tree.read(mp)!.toString('utf-8');
//     // eslint-disable-next-line no-useless-escape
//     const match = /bootstrapApplication\(([^,\)]+)/.exec(text);
//     if (match) {
//       const className = match[1].trim();
//       const importMatch = new RegExp(`import\\s+\\{?\\s*${className}\\s*\\}?\\s+from\\s+['"](.*)['"]`).exec(text);
//       if (importMatch) {
//         const importPath = importMatch[1].startsWith('.') ? importMatch[1] : `./${importMatch[1]}`;
//         const filePath = `src/${importPath.replace(/^\.\/+/, '')}.ts`;
//         if (tree.exists(filePath)) return { className, filePath };
//       }
//     }
//   }

//   const modulePaths = ['src/app/app.module.ts', 'app.module.ts'];
//   for (const mp of modulePaths) {
//     if (!tree.exists(mp)) continue;
//     const text = tree.read(mp)!.toString('utf-8');
//     const match = /bootstrap\s*:\s*\[([^\]]+)\]/.exec(text);
//     if (match) {
//       const className = match[1].split(',')[0].trim();
//       const importMatch = new RegExp(`import\\s+\\{?\\s*${className}\\s*\\}?\\s+from\\s+['"](.*)['"]`).exec(text);
//       if (importMatch) {
//         const importPath = importMatch[1].startsWith('.') ? importMatch[1] : `./${importMatch[1]}`;
//         const filePath = `src/${importPath.replace(/^\.\/+/, '')}.ts`;
//         if (tree.exists(filePath)) return { className, filePath };
//       }
//     }
//   }

//   return null;
// }

// export function addService(): Rule {
//   return (tree: Tree) => {
//     const detected = detectBootstrapComponent(tree);
//     if (!detected) throw new SchematicsException('Could not detect bootstrap component');

//     const { className, filePath } = detected;
//     if (!tree.exists(filePath)) throw new SchematicsException(`Component file not found: ${filePath}`);

//     let content = tree.read(filePath)!.toString('utf-8');
//     const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
//     const recorder = tree.beginUpdate(filePath);

//     // Add imports if missing
//     if (!content.includes('@lukfel/ng-scaffold')) {
//       content = 'import { ScaffoldService, ScaffoldConfig } from \'@lukfel/ng-scaffold\';\n' + content;
//     }
//     if (!content.includes('inject')) {
//       content = 'import { inject } from \'@angular/core\';\n' + content;
//     }

//     // Find class node
//     let classNode: ts.ClassDeclaration | undefined;
//     function visit(node: ts.Node): void {
//       if (ts.isClassDeclaration(node) && node.name?.text === className) {
//         classNode = node;
//       } else ts.forEachChild(node, visit);
//     }
//     visit(sourceFile);

//     if (!classNode) throw new SchematicsException(`Could not find class ${className} in ${filePath}`);

//     // Determine constructor
//     const constructorNode = classNode.members.find(ts.isConstructorDeclaration);

//     if (constructorNode) {
//       // Existing constructor: inject via parameter if missing
//       const paramExists = constructorNode.parameters.some(p =>
//         p.type?.getText(sourceFile).includes('ScaffoldService')
//       );
//       if (!paramExists) {
//         const ctorStart = constructorNode.getStart(sourceFile);
//         const ctorText = constructorNode.getFullText(sourceFile);
//         const insertPos = ctorStart + ctorText.indexOf('(') + 1;
//         recorder.insertLeft(insertPos, 'private scaffoldService: ScaffoldService, ');
//       }

//       // Add assignment inside constructor body if missing
//       const bodyStart = constructorNode.body!.getStart(sourceFile);
//       const bodyEnd = constructorNode.body!.getEnd();
//       const bodyText = content.slice(bodyStart, bodyEnd);
//       if (!bodyText.includes('this.scaffoldService.scaffoldConfig')) {
//         recorder.insertLeft(bodyEnd - 1, '\n    this.scaffoldService.scaffoldConfig = this.scaffoldConfig;\n');
//       }
//     } else {
//       // No constructor: use inject() + new constructor
//       const classStart = classNode.getStart(sourceFile);
//       const classHeaderEnd = content.indexOf('{', classStart) + 1;

//       const snippet = `
//   private scaffoldService = inject(ScaffoldService);
//   private scaffoldConfig: ScaffoldConfig = {
//     // Create your own config or generate it at https://lukfel.github.io/ng-scaffold
//   };
//   constructor() {
//     this.scaffoldService.scaffoldConfig = this.scaffoldConfig;
//   }
// `;

//       recorder.insertLeft(classHeaderEnd, snippet);
//     }

//     tree.commitUpdate(recorder);
//     return tree;
//   };
// }

