import { CommonModule } from '@angular/common';
import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CONFIG } from '../../../config/config.token';
import { ScaffoldLibraryConfig } from '../../../models';
import { Logger } from '../../../services';

@Component({
  selector: 'lf-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class FileUploadComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private logger: Logger = inject(Logger);


  @Input() public color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() public label: string;
  @Input() public matIcon: string;
  // @Input() public loading: boolean;
  @Input() public disabled: boolean = false;
  @Input() public accept: string;
  @Input() public tooltip: string;

  public readonly fileChangeEvent = output<File>();


  public selectFile(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    if (!input || !input.files) return;
    const file: File = input.files[0];

    if (!file) return;

    this.logger.log('[FileUploadComponent]', file);
    this.fileChangeEvent.emit(file);
  }
}
