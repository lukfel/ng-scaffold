import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CONFIG } from '../../../config/config.token';
import { ScaffoldLibraryConfig } from '../../../models';
import { Logger } from '../../../services';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'lf-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ColorPickerComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private logger: Logger = inject(Logger);


  @Input() public color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() public label: string;
  @Input() public matIcon: string;
  @Input() public disabled: boolean = false;
  @Input() public accept: string;
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
