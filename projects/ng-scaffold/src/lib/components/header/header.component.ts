import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderConfig, HeaderResponsiveConfig, MenuButton, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideDownUp', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition(':enter', [style({ transform: 'translateY(-100%)' }), animate('200ms ease-out', style({ transform: 'translateY(0)' }))]),
      transition(':leave', [animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))])
    ])
  ],
  standalone: false
})
export class HeaderComponent implements OnInit {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public headerConfig: HeaderConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public routeLoading: boolean = false;
  @Input() public currentRoute: string;

  @Output() public headerConfigUpdateEvent = new EventEmitter<HeaderConfig>();
  @Output() public headerButtonClickEvent = new EventEmitter<string>();
  @Output() public headerInputSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputChangeEvent = new EventEmitter<string>();


  public mobileButton: MenuButton;


  ngOnInit(): void {
    // Avoid initializing the header with an open input field on mobile
    if (this.isMobile && this.headerConfig?.inputConfig?.enable) {
      const updatedHeaderConfig: HeaderConfig = { ...this.headerConfig, inputConfig: { ...this.headerConfig?.inputConfig, enable: false } };
      this.headerConfigUpdateEvent.emit(updatedHeaderConfig);
    }
  }

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
    const updatedHeaderConfig: HeaderConfig = { ...this.headerConfig, inputConfig: { ...this.headerConfig?.inputConfig, enable: false } };
    this.headerConfigUpdateEvent.emit(updatedHeaderConfig);
  }

  public isActive(id: string): boolean {
    if (!id || !this.currentRoute) {
      return false;
    }

    const route: string = this.currentRoute.substring(this.currentRoute.indexOf('/') + 1);
    return route === id;
  }

  public getRightMobileButton(): MenuButton | null {
    const rightMenuButtons: MenuButton[] = this.headerConfig?.rightMenuButtons || [];
    if (!rightMenuButtons?.length) return null;

    const config: HeaderResponsiveConfig | undefined = this.headerConfig?.responsiveConfig;
    if (!config?.enable) return null;

    const includedButtons: MenuButton[] = rightMenuButtons.filter((button: MenuButton) => !config?.excludeButtonIds?.includes(button.id));
    return {
      id: 'mobile',
      matIcon: ' more_vert',
      menuButtons: [...includedButtons]
    };
  }

  public getRightExcludedButtons(): MenuButton[] | null {
    const rightMenuButtons: MenuButton[] = this.headerConfig?.rightMenuButtons || [];
    if (!rightMenuButtons?.length) return null;

    const config: HeaderResponsiveConfig | undefined = this.headerConfig?.responsiveConfig;
    if (!config?.enable) return null;

    const excludedButtons: MenuButton[] = rightMenuButtons.filter((button: MenuButton) => config?.excludeButtonIds?.includes(button.id));
    return excludedButtons;
  }

}
