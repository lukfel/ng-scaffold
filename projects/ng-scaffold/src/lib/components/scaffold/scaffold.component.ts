import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DOCUMENT, ElementRef, inject, OnDestroy, OnInit, output, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subscription, tap } from 'rxjs';
import { BottomBarConfig, ContentTitleCardConfig, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, NavbarConfig, ScaffoldConfig, ScaffoldLibraryConfig } from '../../models';
import { CONFIG } from '../../scaffold.config';
import { BreakpointService, Logger, OverlayService, RouterService, ScaffoldService } from '../../services';
import { BottomBarComponent } from '../bottom-bar/bottom-bar.component';
import { ContentTitleCardComponent } from '../content-title-card/content-title-card.component';
import { DrawerComponent } from '../drawer/drawer.component';
import { FloatingButtonComponent } from '../floating-button/floating-button.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoadingOverlayComponent } from '../loading-overlay/loading-overlay.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'lf-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    FloatingButtonComponent,
    BottomBarComponent,
    LoadingOverlayComponent
  ]
})
export class ScaffoldComponent implements OnInit, OnDestroy {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private scaffoldService = inject(ScaffoldService);
  private breakpointService = inject(BreakpointService);
  private routerService = inject(RouterService);
  private overlayService = inject(OverlayService)
  private route = inject(ActivatedRoute);
  private document = inject<Document>(DOCUMENT);
  private logger = inject(Logger);


  public readonly scrollContainer = viewChild<ElementRef>('scrollContainer');
  public readonly content = viewChild<ElementRef>('content');

  public readonly headerButtonClickEvent = output<string>();
  public readonly headerInputSubmitEvent = output<string>();
  public readonly headerInputChangeEvent = output<string>();
  public readonly navbarButtonClickEvent = output<string>();
  public readonly floatingButtonClickEvent = output<string>();
  public readonly bottomBarButtonClickEvent = output<string>();

  public scaffoldConfig = signal<ScaffoldConfig | null>(null);
  public headerConfig = signal<HeaderConfig | null>(null);
  public navbarConfig = signal<NavbarConfig | null>(null);
  public drawerConfig = signal<DrawerConfig | null>(null);
  public drawerPortal = toSignal<ComponentPortal<unknown> | TemplatePortal<unknown> | null>(this.scaffoldService.drawerPortal$);
  public footerConfig = signal<FooterConfig | null>(null);
  public contentTitleCardConfig = signal<ContentTitleCardConfig | null>(null);
  public floatingButtonConfig = signal<FloatingButtonConfig | null>(null);
  public bottomBarConfig = signal<BottomBarConfig | null>(null);

  public routeHistory = toSignal<string[]>(this.routerService.routeHistory$.pipe(tap((routeHistory: string[]) => {
    if (this.libraryConfig?.debugging) this.logger.log('[RouteHistory]', routeHistory);
    const scrollContainer = this.scrollContainer();
    if (scrollContainer && this.scaffoldConfig()?.scrollPositionRestoration) {
      scrollContainer.nativeElement.scrollTop = 0;
    }
  })));
  public currentRoute = toSignal<string>(this.routerService.currentRoute$);
  public routeLoading = toSignal<boolean>(this.routerService.loading$);
  public isMobile = toSignal<boolean>(this.breakpointService.breakpoint$.pipe(map((breakpointState: BreakpointState) => {
    if (this.libraryConfig?.debugging) this.logger.log('[BreakpointState]', breakpointState);
    return breakpointState.breakpoints[Breakpoints.XSmall] || breakpointState.breakpoints[Breakpoints.Small];
  })));

  public scrollTopPosition = signal<number>(0);

  public initialized = signal<boolean>(false);

  private _subscription: Subscription = new Subscription;


  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      if (this.libraryConfig?.debugging) this.logger.log('[ScaffoldConfig]', scaffoldConfig);

      if (scaffoldConfig) {
        this.toggleLoadingOverlay(scaffoldConfig?.loading || false);

        this.scaffoldConfig.set(scaffoldConfig);
        this.headerConfig.set(scaffoldConfig.headerConfig || null);
        this.navbarConfig.set(scaffoldConfig.navbarConfig || null);
        this.drawerConfig.set(scaffoldConfig.drawerConfig || null);
        this.footerConfig.set(scaffoldConfig.footerConfig || null);
        this.contentTitleCardConfig.set(scaffoldConfig.contentTitleCardConfig || null);
        this.floatingButtonConfig.set(scaffoldConfig.floatingButtonConfig || null);
        this.bottomBarConfig.set(scaffoldConfig.bottomBarConfig || null);
      }
    }));

    // Listen to scroll events
    const scrollContainer = this.scrollContainer();
    if (scrollContainer) {
      const element: HTMLElement = scrollContainer.nativeElement;

      this._subscription.add(fromEvent(element, 'scroll').pipe(
        distinctUntilChanged(),
        debounceTime(100)
      ).subscribe((e: Event) => {
        const target: HTMLElement = e.target as HTMLElement;
        this.scrollTopPosition.set(target.scrollTop);
      }));
    }

    // Listen for fragments in the current route
    if (this.scaffoldConfig()?.anchorScrolling) {
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

    setTimeout(() => { this.initialized.set(true); });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }


  // Header
  public headerConfigUpdated(headerConfig: Partial<HeaderConfig>): void {
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
  public drawerConfigUpdated(drawerConfig: Partial<DrawerConfig>): void {
    this.scaffoldService.updateScaffoldProperty('drawerConfig', drawerConfig);
  }

  // Content title card
  public backButtonClicked(): void {
    this.routerService.navigateBack();
  }

  // Floating button
  public floatingButtonConfigUpdated(floatingButtonConfig: Partial<FloatingButtonConfig>): void {
    this.scaffoldService.updateScaffoldProperty('floatingButtonConfig', floatingButtonConfig);
  }

  public floatingButtonClicked(id: string): void {
    const scrollContainer = this.scrollContainer();
    if (!id && scrollContainer) {
      scrollContainer.nativeElement.scrollTop = 0;
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


  // Loading overlay
  private async toggleLoadingOverlay(loading: boolean): Promise<void> {
    if (loading) {
      this.overlayService.open(LoadingOverlayComponent);
    } else {
      this.overlayService.close();
    }
  }
}
