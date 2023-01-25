import { Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContainerConfig, DrawerConfig, FooterConfig, HeaderConfig, SidenavConfig, ToTopButtonConfig } from '../../models';
import { BreakpointService, Logger } from '../../services';

@Component({
  selector: 'lf-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent implements OnInit, OnDestroy {

  @Input() public containerConfig: ContainerConfig = {};
  @Input() public headerConfig: HeaderConfig = {};
  @Input() public sidenavConfig: SidenavConfig = {};
  @Input() public drawerConfig: DrawerConfig = {};
  @Input() public footerConfig: FooterConfig = {};
  @Input() public toTopButtonConfig: ToTopButtonConfig = {};

  @Output() public headerClickEvent = new EventEmitter<string>();
  @Output() public sidenavClickEvent = new EventEmitter<string>();

  public isMobile: boolean = false;

  private _subscription: Subscription;

  constructor(private breakpointService: BreakpointService,
              private logger: Logger) { }

  public ngOnInit(): void {
    this._subscription = this.breakpointService.breakpoint$.subscribe((result: BreakpointState) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.logger.log('XSmall')
        this.isMobile = true;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.logger.log('Small')
        this.isMobile = true;
      } else if (result.breakpoints[Breakpoints.Medium]) {
        this.logger.log('Medium')
        this.isMobile = false;
      } else if (result.breakpoints[Breakpoints.Large]) {
        this.logger.log('Large')
        this.isMobile = false;
      }
    });
  }

  public ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public sidenavButtonClicked(id: string): void {
    this.sidenavClickEvent.emit(id);
  }

  public headerButtonClicked(id: string): void {
    this.headerClickEvent.emit(id);
  }

}
