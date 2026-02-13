import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, linkedSignal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScaffoldLibraryConfig } from '../../../models';
import { CONFIG } from '../../../scaffold.config';

@Component({
  selector: 'lf-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
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
export class ColorPickerComponent {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });


  public readonly color = input<'primary' | 'accent' | 'warn' | string>('primary');
  public readonly label = input<string>();
  public readonly matIcon = input<string>();
  public readonly disabled = input<boolean>(false);
  public readonly tooltip = input<string>();

  public readonly colorChangeEvent = output<string>();

  public selectedColor = linkedSignal<string>(() => {
    const color: 'primary' | 'accent' | 'warn' | string = this.color();
    if (color && color !== 'primary' && color !== 'accent' && color !== 'warn') {
      return color;
    }

    return '';
  });
  public labelColor = computed<string>(() => {
    const hex = this.selectedColor().replace('#', '');

    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128 ? '#000000' : '#ffffff';
  });


  public selectColor(event: string): void {
    this.selectedColor.set(event);
    this.colorChangeEvent.emit(event);
  }
}
