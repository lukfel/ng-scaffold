import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HeaderConfig } from '../../models/header-config.model';
import { RouterService } from '../../services/router.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() public headerConfig: HeaderConfig = {};

  @Output() public headerClickEvent = new EventEmitter<string>();

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
    this.headerClickEvent.emit(id);
  }

}
