import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, fromEvent, Subscription } from 'rxjs';
import { BottomBarConfig, ContentTitleCardConfig, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, NavbarConfig, ScaffoldConfig } from '../../models';
import { BreakpointService, Logger, RouterService, ScaffoldService } from '../../services';

@Component({
  selector: 'lf-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss'],
  standalone: false
})
export class ScaffoldComponent implements OnInit, OnDestroy {

  @ViewChild('scrollContainer', { static: true }) public scrollContainer: ElementRef;
  @ViewChild('content', { static: true }) public content: ElementRef;

  @Output() public headerButtonClickEvent = new EventEmitter<string>();
  @Output() public headerInputSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputChangeEvent = new EventEmitter<string>();
  @Output() public navbarButtonClickEvent = new EventEmitter<string>();
  @Output() public floatingButtonClickEvent = new EventEmitter<string>();
  @Output() public bottomBarButtonClickEvent = new EventEmitter<string>();

  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public navbarConfig: NavbarConfig = {};
  public drawerConfig: DrawerConfig = {};
  public drawerPortal: ComponentPortal<unknown> | TemplatePortal<unknown> | null;
  public footerConfig: FooterConfig = {};
  public contentTitleCardConfig: ContentTitleCardConfig = {};
  public floatingButtonConfig: FloatingButtonConfig = {};
  public bottomBarConfig: BottomBarConfig = {};

  public routeHistory: string[] = [];
  public currentRoute: string;
  public isMobile: boolean = false;
  public routeLoading: boolean = false;
  public scrollTopPosition: number = 0;

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService,
    private breakpointService: BreakpointService,
    private routerService: RouterService,
    private logger: Logger,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.logger.log('scaffoldConfig: ', scaffoldConfig);

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
      this.logger.log('drawerPortal: ', drawerPortal);
      
      this.drawerPortal = drawerPortal;
    }));

    // Listen for breakpoint changes
    this._subscription.add(this.breakpointService.breakpoint$.subscribe((breakpointState: BreakpointState) => {
      this.logger.log('breakpointState: ', breakpointState);

      if (breakpointState.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      } else if (breakpointState.breakpoints[Breakpoints.Small]) {
        this.isMobile = true;
      } else if (breakpointState.breakpoints[Breakpoints.Medium]) {
        this.isMobile = false;
      } else if (breakpointState.breakpoints[Breakpoints.Large]) {
        this.isMobile = false;
      }
    }));

    // Listen for route changes
    this._subscription.add(this.routerService.routeHistory$.subscribe((routeHistory: string[]) => {
      this.logger.log('routeHistory: ', routeHistory);

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
    this._subscription.add(this.routerService.loading$.subscribe(routeLoading => {
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
        // this.logger.log('scrollTopPosition: ', target.scrollTop);
        this.scrollTopPosition = target.scrollTop;
      }));
    }

    // Listen for fragments in the current route
    if (this.scaffoldConfig?.anchorScrolling) {
      this._subscription.add(this.route.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
          this.logger.log('fragment: ', fragment);
          setTimeout(() => {
            const element = this.document.querySelector(`#${fragment}`);
            if (element) {
              element.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
            }
          }, 100);
        }
      }));
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
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

  public navbarButtonClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.navbarButtonClickEvent.emit(id);
  }

  public backButtonClicked(): void {
    this.routerService.navigateBack();
  }

  public floatingButtonClicked(id: string): void {
    if (!id && this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    } else {
      this.scaffoldService.buttonClickEventValue = id;
      this.floatingButtonClickEvent.emit(id);
    }
  }

  public bottomBarCloseClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.bottomBarButtonClickEvent.emit(id);
  }

  public bottomBarButtonClicked(id: string): void {
    this.scaffoldService.buttonClickEventValue = id;
    this.bottomBarButtonClickEvent.emit(id);
  }

}
