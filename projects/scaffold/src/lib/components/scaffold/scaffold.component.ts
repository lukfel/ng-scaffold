import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, Subscription } from 'rxjs';
import { ContentTitleCardConfig, DrawerConfig, FloatingButtonConfig, FooterConfig, HeaderConfig, NavbarConfig, ScaffoldConfig } from '../../models';
import { BreakpointService, Logger, RouterService, ScaffoldService } from '../../services';

@Component({
  selector: 'lf-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit, OnDestroy {

  // @HostListener('window:resize', ['$event'])
  // public onResize(): void {
  //   if (this.content) {
  //     this.contentWidth = this.content.nativeElement.clientWidth;
  //   }
  // }

  @ViewChild('scrollContainer', { static: true }) public scrollContainer: ElementRef;
  @ViewChild('content', { static: true }) public content: ElementRef;

  @Output() public headerButtonClickEvent = new EventEmitter<string>();
  @Output() public headerInputSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputChangeEvent = new EventEmitter<string>();
  @Output() public navbarButtonClickEvent = new EventEmitter<string>();
  @Output() public floatingButtonClickEvent = new EventEmitter<string>();

  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public navbarConfig: NavbarConfig = {};
  public drawerConfig: DrawerConfig = {};
  public footerConfig: FooterConfig = {};
  public contentTitleCardConfig: ContentTitleCardConfig = {};
  public floatingButtonConfig: FloatingButtonConfig = {};

  public routeHistory: string[] = [];
  public currentRoute: string;
  public isMobile: boolean = false;
  public routeLoading: boolean = false;
  public scrollTopPosition: number = 0;
  // public contentWidth: number = 0;

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService,
    private breakpointService: BreakpointService,
    private routerService: RouterService,
    private logger: Logger) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.logger.log('scaffoldConfig: ', scaffoldConfig);

      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = scaffoldConfig.headerConfig || {};
      this.navbarConfig = scaffoldConfig.navbarConfig || {};
      this.drawerConfig = scaffoldConfig.drawerConfig || {};
      this.footerConfig = scaffoldConfig.footerConfig || {};
      this.contentTitleCardConfig = scaffoldConfig.contentTitleCardConfig || {};
      this.floatingButtonConfig = scaffoldConfig.floatingButtonConfig || {};
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
      this.logger.log('currentRout: ', currentRout);
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
        debounceTime(10)
      ).subscribe((e: Event) => {
        const target: HTMLElement = e.target as HTMLElement;
        // this.logger.log('scrollTopPosition: ', target.scrollTop);
        this.scrollTopPosition = target.scrollTop;
      }));
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public headerButtonClicked(id: string): void {
    this.headerButtonClickEvent.emit(id);
  }

  public headerInputSubmitted(value: string): void {
    this.headerInputSubmitEvent.emit(value);
  }

  public headerInputChanged(value: string): void {
    this.scaffoldService.headerInputValue = value;
    this.headerInputChangeEvent.emit(value);
  }

  public navbarButtonClicked(id: string): void {
    this.navbarButtonClickEvent.emit(id);
  }

  public backButtonClicked(): void {
    this.routerService.navigateBack();
  }

  public floatingButtonClicked(id: string): void {
    if (!id && this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollTop = 0;
    } else {
      this.floatingButtonClickEvent.emit(id);
    }
  }

}
