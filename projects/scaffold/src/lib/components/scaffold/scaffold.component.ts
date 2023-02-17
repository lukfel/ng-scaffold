import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentTitleCardConfig, DrawerConfig, FooterConfig, HeaderConfig, NavbarConfig, ScaffoldConfig, ToTopButtonConfig } from '../../models';
import { BreakpointService, Logger, RouterService, ScaffoldService } from '../../services';

@Component({
  selector: 'lf-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit, OnDestroy {

  @ViewChild('scrollContent', { static: true }) public scrollContent: ElementRef;

  public scaffoldConfig: ScaffoldConfig = {};
  public headerConfig: HeaderConfig = {};
  public navbarConfig: NavbarConfig = {};
  public drawerConfig: DrawerConfig = {};
  public footerConfig: FooterConfig = {};
  public contentTitleCardConfig: ContentTitleCardConfig = {};
  public toTopButtonConfig: ToTopButtonConfig = {};

  @Output() public headerClickEvent = new EventEmitter<string>();
  @Output() public headerSubmitEvent = new EventEmitter<string>();
  @Output() public headerInputEvent = new EventEmitter<string>();
  @Output() public navbarClickEvent = new EventEmitter<string>();

  public routeHistory: string[] = [];
  public currentRoute: string;
  public isMobile: boolean = false;
  public routeLoading: boolean = false;
  public scrollTopPosition: number = 0;

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService,
    private breakpointService: BreakpointService,
    private routerService: RouterService,
    private logger: Logger) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.scaffoldConfig = scaffoldConfig;
      this.headerConfig = scaffoldConfig.headerConfig || {};
      this.navbarConfig = scaffoldConfig.navbarConfig || {};
      this.drawerConfig = scaffoldConfig.drawerConfig || {};
      this.footerConfig = scaffoldConfig.footerConfig || {};
      this.contentTitleCardConfig = scaffoldConfig.contentTitleCardConfig || {};
      this.toTopButtonConfig = scaffoldConfig.toTopButtonConfig || {};
    }));

    // Listen for breakpoint changes
    this._subscription.add(this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.isMobile = true;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.isMobile = true;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.isMobile = false;
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.isMobile = false;
      }
    }));

    // Listen for route changes
    this._subscription.add(this.routerService.routeHistory$.subscribe((routeHistory: string[]) => {
      if (routeHistory) {
        this.routeHistory = routeHistory;
      }

      if (this.scrollContent && this.scaffoldConfig?.scrollPositionRestoration) {
        this.scrollContent.nativeElement.scrollTop = 0;
      }
    }));

    // Listen for current route changes
    this._subscription.add(this.routerService.currentRoute$.subscribe((currentRout: string) => this.currentRoute = currentRout));

    // Listen for route loading
    this._subscription.add(this.routerService.loading$.subscribe(loading => this.routeLoading = loading));

    // Listen to scroll events
    if(this.scrollContent) {
      this.scrollContent.nativeElement.addEventListener('scroll', (e: Event) => {
        const target: HTMLElement = e.target as HTMLElement;
        this.scrollTopPosition = target.scrollTop;
      });
    }

    // Offset height for address bar on mobile
    // if(this.scaffoldElement) {
    //   const actualHeight: number = window.innerHeight;
    //   const elementHeight: number = this.scaffoldElement.nativeElement.clientHeight;
    //   this.mobileOffset = elementHeight - actualHeight;
    // }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public headerButtonClicked(id: string): void {
    this.headerClickEvent.emit(id);
  }

  public headerInputSubmitted(value: string): void {
    this.headerSubmitEvent.emit(value);
  }

  public headerInputChanged(value: string): void {
    this.scaffoldService.headerInputValue = value;
    this.headerInputEvent.emit(value);
  }

  public navbarButtonClicked(id: string): void {
    this.navbarClickEvent.emit(id);
  }

  public backButtonClickEvent(): void {
    this.routerService.navigateBack();
  }

}
