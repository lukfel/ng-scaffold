import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BottomBarConfig, ScaffoldConfig } from '../../../models';
import { ScaffoldService } from '../../../services';

@Component({
  selector: 'lf-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit, OnDestroy {

  @Input() public bottomBarConfig: BottomBarConfig = {};

  @Output() public bottomBarCloseClickEvent = new EventEmitter<void>();
  @Output() public bottomBarButtonClickEvent = new EventEmitter<string>();

  public isMobile: boolean = false;

  private _subscription: Subscription = new Subscription;

  constructor(private scaffoldService: ScaffoldService) { }

  ngOnInit(): void {
    // Listen for config changes
    this._subscription.add(this.scaffoldService.scaffoldConfig$.subscribe((scaffoldConfig: ScaffoldConfig) => {
      this.isMobile = scaffoldConfig.navbarConfig?.enable || false;
      console.log(this.isMobile);
    }));
  }
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  public actionClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.bottomBarButtonClickEvent.emit(id);
  }

}
