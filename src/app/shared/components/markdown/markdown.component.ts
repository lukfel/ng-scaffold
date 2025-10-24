import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown',
  imports: [MarkdownModule],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
export class MarkdownComponent {

  private dialogRef = inject<MatDialogRef<MarkdownComponent>>(MatDialogRef, { optional: true });
  public data = inject(MAT_DIALOG_DATA, { optional: true }) ?? {};

}
