import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CONFIG } from '../../../config/config.token';
import { ScaffoldLibraryConfig } from '../../../models';
import { Logger } from '../../../services';

@Component({
  selector: 'lf-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ColorPickerComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private logger: Logger = inject(Logger);


  @Input() public color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() public label: string;
  @Input() public matIcon: string;
  @Input() public disabled: boolean = false;
  @Input() public tooltip: string;

  @Output() public colorChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  public selectedColor: string = '';


  public selectColor(event: string): void {
    this.selectedColor = event;
    this.colorChangeEvent.emit(event);
  }

  // Get bright or dark color depeindung on background color
  public getContrastTextColor(hexColor: string): string {
    const hex = hexColor.replace('#', '');

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#ffffff';
  }
}
