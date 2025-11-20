// import { Tree } from '@angular-devkit/schematics';
// import { InsertChange, ReplaceChange } from '@schematics/angular/utility/change';
// import * as ts from 'typescript';

// /**
//  * Read a file into a ts.SourceFile
//  */
// export function getTsSourceFile(tree: Tree, path: string): ts.SourceFile | null {
//     const buffer = tree.read(path);
//     if (!buffer) return null;
//     const content = buffer.toString('utf-8');
//     return ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);
// }

// /**
//  * Create InsertChange or ReplaceChange compatible object
//  */
// export function applyInsertChanges(tree: Tree, filePath: string, changes: Array<InsertChange | ReplaceChange>): void {
//     const recorder = tree.beginUpdate(filePath);
//     for (const change of changes) {
//         // InsertChange has 'pos' and 'toAdd'
//         if ((change as any).pos !== undefined && (change as any).toAdd !== undefined) {
//             recorder.insertLeft((change as any).pos, (change as any).toAdd);
//         } else if ((change as any).order != undefined) {
//             // ignore other change shapes
//         }
//     }
//     tree.commitUpdate(recorder);
// }