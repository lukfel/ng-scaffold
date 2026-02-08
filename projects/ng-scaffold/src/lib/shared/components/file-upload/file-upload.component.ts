import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScaffoldLibraryConfig } from '../../../models';
import { CONFIG } from '../../../scaffold.config';
import { Logger } from '../../../services';

@Component({
  selector: 'lf-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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


  public readonly color = input<'primary' | 'accent' | 'warn'>('primary');
  public readonly label = input<string>();
  public readonly matIcon = input<string>();
  // @Input() public loading: boolean;
  public readonly disabled = input<boolean>(false);
  public readonly accept = input<string>();
  public readonly tooltip = input<string>();

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
