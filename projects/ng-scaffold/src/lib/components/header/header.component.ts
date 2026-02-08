import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { HeaderConfig, MenuButton, ScaffoldLibraryConfig } from '../../models';
import { InputComponent } from '../../shared/components/input/input.component';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideDownUp', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition(':enter', [style({ transform: 'translateY(-100%)' }), animate('200ms ease-out', style({ transform: 'translateY(0)' }))]),
      transition(':leave', [animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ])
  ],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    InputComponent
  ]
})
export class HeaderComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly headerConfig = input<HeaderConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly routeLoading = input<boolean>(false);
  public readonly currentRoute = input<string>();

  public readonly headerConfigUpdateEvent = output<Partial<HeaderConfig>>();
  public readonly headerButtonClickEvent = output<string>();
  public readonly headerInputSubmitEvent = output<string>();
  public readonly headerInputChangeEvent = output<string>();

  public isActive = computed(() => {
    const currentRoute = this.currentRoute();
    const route: string = currentRoute?.substring(currentRoute.indexOf('/') + 1) || '';
    return (id: string): boolean => !!route && !!id && route === id;
  });


  public rightMobileButton = computed<MenuButton | null>(() => {
    const headerConfig = this.headerConfig();
    const rightMenuButtons = headerConfig?.rightMenuButtons ?? [];

    if (!rightMenuButtons.length) return null;

    const config = headerConfig?.responsiveConfig;
    if (!config?.enable) return null;

    const includedButtons = rightMenuButtons.filter(
      button => !config.excludeButtonIds?.includes(button.id)
    );

    return {
      id: '',
      matIcon:
        !config.matIcon && !config.svgIcon && !config.label
          ? 'more_vert'
          : config.matIcon,
      svgIcon: config.svgIcon,
      label: config.label,
      menuButtons: includedButtons
    };
  });

  public rightExcludedButtons = computed<MenuButton[] | null>(() => {
    const headerConfig = this.headerConfig();
    const rightMenuButtons = headerConfig?.rightMenuButtons ?? [];

    if (!rightMenuButtons.length) return null;

    const config = headerConfig?.responsiveConfig;
    if (!config?.enable) return null;

    return rightMenuButtons.filter(button =>
      config.excludeButtonIds?.includes(button.id)
    );
  });


  public buttonClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.headerButtonClickEvent.emit(id);
  }

  public inputSubmitted(value: string): void {
    this.headerInputSubmitEvent.emit(value);
  }

  public inputChanged(value: string): void {
    this.headerInputChangeEvent.emit(value);
  }

  public inputClosed(): void {
    this.headerConfigUpdateEvent.emit({ inputConfig: { enable: false } });
  }
  
}
