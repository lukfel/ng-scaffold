import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FloatingButtonConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, NgClass],
})
export class FloatingButtonComponent {
  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly floatingButtonConfig = input<FloatingButtonConfig | null>(null);
  public readonly onTop = input<boolean>(false);
  public readonly isMobile = input<boolean>(false);
  public readonly drawerEnabled = input<boolean>(false);
  public readonly navbarEnabled = input<boolean>(false);
  public readonly bottomBarEnabled = input<boolean>(false);

  public readonly floatingButtonConfigUpdateEvent = output<Partial<FloatingButtonConfig>>();
  public readonly floatingButtonClickEvent = output<string>();

  private readonly initialized = signal<boolean>(false);

  constructor() {
    effect(() => {
      const floatingButtonConfig: FloatingButtonConfig | null = this.floatingButtonConfig();
      if (!floatingButtonConfig || this.initialized()) return;

      this.initialized.set(true);

      const updatedFloatingButtonConfigConfig: Partial<FloatingButtonConfig> = {
        matIcon:
          !floatingButtonConfig.matIcon && !floatingButtonConfig.svgIcon
            ? 'arrow_upward'
            : floatingButtonConfig.matIcon || floatingButtonConfig.svgIcon,
        horizontalPosition: floatingButtonConfig.horizontalPosition ?? 'right',
      };

      if (
        JSON.stringify(updatedFloatingButtonConfigConfig) !== JSON.stringify(floatingButtonConfig)
      ) {
        this.floatingButtonConfigUpdateEvent.emit(updatedFloatingButtonConfigConfig);
      }
    });
  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id || '');
  }
}
