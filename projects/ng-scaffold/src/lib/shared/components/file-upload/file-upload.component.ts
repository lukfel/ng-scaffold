import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CONFIG } from '../../../config/config.token';
import { ScaffoldLibraryConfig } from '../../../models';
import { Logger } from '../../../services';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'lf-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  standalone: true,
  imports: [SharedModule]
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

  @Output() public fileChangeEvent: EventEmitter<File> = new EventEmitter<File>();


  public selectFile(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    if (!input || !input.files) return;
    const file: File = input.files[0];

    if (!file) return;

    this.logger.log('[FileUploadComponent]', file);
    this.fileChangeEvent.emit(file);
  }
}
