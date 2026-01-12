import { Clipboard } from '@angular/cdk/clipboard';
import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '@lukfel/ng-scaffold';
import { MarkdownComponent as ExternalMarkdownComponent } from 'ngx-markdown';
import { MaterialModule } from '../../modules/material.module';

export interface MarkdownDialogData {
  title?: string;
  src?: string;
  data?: string;
  showCopy?: boolean;
}

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
  standalone: true,
  imports: [
    MaterialModule,
    ExternalMarkdownComponent
  ]
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