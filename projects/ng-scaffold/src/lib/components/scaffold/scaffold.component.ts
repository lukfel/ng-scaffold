import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';

import { Component, DOCUMENT, ElementRef, EventEmitter, inject, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, Subscription } from 'rxjs';
import { CONFIG } from '../../config/config.token';
import { BottomBarConfig, ContentTitleCardConfig, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, HeaderResponsiveConfig, MenuButton, NavbarConfig, ScaffoldConfig, ScaffoldLibraryConfig } from '../../models';
import { BreakpointService, Logger, RouterService, ScaffoldService } from '../../services';

@Component({
  selector: 'lf-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss'],
  standalone: false
})
export class ScaffoldComponent implements OnInit, OnDestroy {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private scaffoldService = inject(ScaffoldService);
  private breakpointService = inject(BreakpointService);
  private routerService = inject(RouterService);
  private logger = inject(Logger);
  private route = inject(ActivatedRoute);
  private document = inject<Document>(DOCUMENT);


  @ViewChild('scrollContainer', { static: true }) public scrollContainer: ElementRef;
  @ViewChild('content', { static: true }) public content: ElementRef;

  @Output() public headerButtonClickEvent = new EventEmitter<string>();
  @Output() public headerInputSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputChangeEvent = new EventEmitter<string>();
  @Output() public navbarButtonClickEvent = new EventEmitter<string>();
  @Output() public floatingButtonClickEvent = new EventEmitter<string>();
  @Output() public bottomBarButtonClickEvent = new EventEmitter<string>();


  public scaffoldConfig: ScaffoldConfig | null = null;
  public headerConfig: HeaderConfig | null = null;
  public navbarConfig: NavbarConfig | null = null;
  public drawerConfig: DrawerConfig | null = null;
  public drawerPortal: ComponentPortal<unknown> | TemplatePortal<unknown> | null;
  public footerConfig: FooterConfig | null = null;
  public contentTitleCardConfig: ContentTitleCardConfig | null = null;
  public floatingButtonConfig: FloatingButtonConfig | null = null;
  public bottomBarConfig: BottomBarConfig | null = null;

  public routeHistory: string[] = [];
  public currentRoute: string;
  public isMobile: boolean = false;
  public routeLoading: boolean = false;
  public scrollTopPosition: number = 0;

  public initialized: boolean = false;
  private previousRightMenuButtons: MenuButton[];

  private _subscription: Subscription = new Subscription;


  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (this.libraryConfig?.debugging) this.logger.log('[ScaffoldConfig]', scaffoldConfig);

      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = this.scaffoldConfig.headerConfig!;
      this.navbarConfig = this.scaffoldConfig.navbarConfig!;
      this.drawerConfig = this.scaffoldConfig.drawerConfig!;
      this.footerConfig = this.scaffoldConfig.footerConfig!;
      this.contentTitleCardConfig = this.scaffoldConfig.contentTitleCardConfig!;
      this.floatingButtonConfig = this.scaffoldConfig.floatingButtonConfig!;
      this.bottomBarConfig = this.scaffoldConfig.bottomBarConfig!;
    }));

    // Listen for drawer portal changes
    this._subscription.add(this.scaffoldService.drawerPortal$.subscribe((drawerPortal: ComponentPortal<unknown> | TemplatePortal<unknown> | null) => {
      if (this.libraryConfig?.debugging) this.logger.log('[DrawerPortal]', drawerPortal);

      this.drawerPortal = drawerPortal;
    }));

    // Listen for breakpoint changes
    this._subscription.add(this.breakpointService.breakpoint$.subscribe((breakpointState: BreakpointState) => {
      if (this.libraryConfig?.debugging) this.logger.log('[BreakpointState]', breakpointState);

      let isMobile: boolean = false;

      if (breakpointState.breakpoints[Breakpoints.XSmall]) {
        isMobile = true;
      } else if (breakpointState.breakpoints[Breakpoints.Small]) {
        isMobile = true;
      } else if (breakpointState.breakpoints[Breakpoints.Medium]) {
        isMobile = false;
      } else if (breakpointState.breakpoints[Breakpoints.Large]) {
        isMobile = false;
      }

      if (this.isMobile !== isMobile) this.convertRightMenuButtonsToMobile(isMobile);

      this.isMobile = isMobile;
    }));

    // Listen for route changes
    this._subscription.add(this.routerService.routeHistory$.subscribe((routeHistory: string[]) => {
      if (this.libraryConfig?.debugging) this.logger.log('[RouteHistory]', routeHistory);

      if (routeHistory) {
        this.routeHistory = routeHistory;
      }

      if (this.scrollContainer && this.scaffoldConfig?.scrollPositionRestoration) {
        this.scrollContainer.nativeElement.scrollTop = 0;
      }
    }));

    // Listen for current route changes
    this._subscription.add(this.routerService.currentRoute$.subscribe((currentRout: string) => {
      this.currentRoute = currentRout
    }));

    // Listen for route loading
    this._subscription.add(this.routerService.loading$.subscribe((routeLoading: boolean) => {
      this.routeLoading = routeLoading
    }));

    // Listen to scroll events
    if (this.scrollContainer) {
      const element: HTMLElement = this.scrollContainer.nativeElement;

      this._subscription.add(fromEvent(element, 'scroll').pipe(
        distinctUntilChanged(),
        debounceTime(100)
      ).subscribe((e: Event) => {
        const target: HTMLElement = e.target as HTMLElement;
        this.scrollTopPosition = target.scrollTop;
      }));
    }

    // Listen for fragments in the current route
    if (this.scaffoldConfig?.anchorScrolling) {
      this._subscription.add(this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
          if (this.libraryConfig?.debugging) this.logger.log('[RouteFragment]', fragment);
          setTimeout(() => {
            const element = this.document.querySelector(`#${fragment}`);
            if (element) {
              element.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
            }
          }, 100);
        }
      }));
    }

    setTimeout(() => { this.initialized = true; });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  // Header
  public headerConfigUpdated(headerConfig: HeaderConfig): void {
    this.scaffoldService.updateScaffoldProperty('headerConfig', headerConfig);
  }

  public headerButtonClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.headerButtonClickEvent.emit(id);
  }

  public headerInputSubmitted(value: string): void {
    this.headerInputSubmitEvent.emit(value);
  }

  public headerInputChanged(value: string): void {
    this.scaffoldService.headerInputChangeValue = value;
    this.headerInputChangeEvent.emit(value);
  }

  // Navbar
  public navbarButtonClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.navbarButtonClickEvent.emit(id);
  }

  // Drawer
  public drawerConfigUpdated(drawerConfig: DrawerConfig): void {
    this.scaffoldService.updateScaffoldProperty('drawerConfig', drawerConfig);
  }

  // Content title card
  public backButtonClicked(): void {
    this.routerService.navigateBack();
  }

  // Floating button
  public floatingButtonConfigUpdated(floatingButtonConfig: FloatingButtonConfig): void {
    this.scaffoldService.updateScaffoldProperty('floatingButtonConfig', floatingButtonConfig);
  }

  public floatingButtonClicked(id: string): void {
    if (!id && this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    } else {
      this.scaffoldService.buttonClickEventValue = id;
      this.floatingButtonClickEvent.emit(id);
    }
  }

  // Bottom bar
  public bottomBarCloseClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.bottomBarButtonClickEvent.emit(id);
  }

  public bottomBarButtonClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.bottomBarButtonClickEvent.emit(id);
  }


  // Helper
  private convertRightMenuButtonsToMobile(isMobile: boolean): void {
    if (this.headerConfig?.responsiveConfig?.enable) {
      const config: HeaderResponsiveConfig = this.headerConfig.responsiveConfig;

      if (isMobile) {
        const rightMenuButtons: MenuButton[] = [...this.headerConfig?.rightMenuButtons || []];
        this.previousRightMenuButtons = [...rightMenuButtons];
        const excludedButtons: MenuButton[] = rightMenuButtons.filter((button: MenuButton) => config?.excludeButtonIds?.includes(button.id));
        const includedButtons: MenuButton[] = rightMenuButtons.filter((button: MenuButton) => !config?.excludeButtonIds?.includes(button.id));

        if (rightMenuButtons?.length) {
          const updatedHeaderConfig: HeaderConfig = {
            ...this.headerConfig,
            rightMenuButtons: [...excludedButtons, { id: 'menu', matIcon: (!config.matIcon && !config.svgLogo) ? 'more_vert' : config.matIcon, svgIcon: config.svgLogo, menuButtons: [...includedButtons] }]
          };
          this.headerConfigUpdated(updatedHeaderConfig);
        }
      } else if (!isMobile) {
        if (this.previousRightMenuButtons?.length) {
          const updatedHeaderConfig: HeaderConfig = {
            ...this.headerConfig,
            rightMenuButtons: [...this.previousRightMenuButtons]
          };
          this.headerConfigUpdated(updatedHeaderConfig);
        }
      }
    }
  }

}
