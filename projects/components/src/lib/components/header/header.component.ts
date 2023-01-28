import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HeaderConfig } from '../../models';
import { RouterService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() public headerConfig: HeaderConfig = {};
  @Input() public isMobile: boolean = false;
  @Input() public scrollElement: HTMLElement;

  @Output() public headerClickEvent = new EventEmitter<string>();
  @Output() public headerInputEvent = new EventEmitter<string>();

  public inputValue: string = '';
  public routeLoading: boolean = false;

  private _subscription: Subscription;

  constructor(private routerService: RouterService) {}

  public ngOnInit(): void {
    if(this.headerConfig?.showRouteLoading) {
      this._subscription = this.routerService.loading$.subscribe(loading => this.routeLoading = loading);
    }
  }

  public ngOnDestroy(): void {
    if(this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public navigateBack(): void {
    this.routerService.navigateBack();
  }

  public buttonClicked(id?: string): void {
    if(!id) {
      return;
    }

    this.headerClickEvent.emit(id);
  }

  public inputChanged(value: string): void {
    this.headerInputEvent.emit(value);
  }

}
