import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarService } from '@lukfel/ng-scaffold';
import { MarkdownModule } from 'ngx-markdown';

export interface MarkdownDialogData {
  title?: string;
  src?: string;
  data?: string;
  showCopy?: boolean;
}

@Component({
  selector: 'app-markdown',
  imports: [MarkdownModule, MatDialogModule, MatButtonModule, MatIconModule, ClipboardModule],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  standalone: true
})
export class MarkdownComponent implements OnInit {

  public data = inject<MarkdownDialogData>(MAT_DIALOG_DATA, { optional: true }) ?? {};
  private snackbarService = inject(SnackbarService);
  private clipboard = inject(Clipboard);


  public dataSnippet: string;


  ngOnInit(): void {
    if (this.data?.data) {
      this.dataSnippet =
        `\`\`\`ts
// Configure the demo page and copy the config to your application:
${this.data.data}
\`\`\``;

      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 150);
    }
  }


  public copy(): void {
    if (this.data.showCopy && this.data.data) {
      this.clipboard.copy(this.data.data)
      this.snackbarService.openSnackbar('Copied', 'Close');
    }
  }
}