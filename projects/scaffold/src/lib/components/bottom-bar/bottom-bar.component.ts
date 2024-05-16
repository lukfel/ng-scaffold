import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BottomBarConfig } from '../../models';

@Component({
  selector: 'lf-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {

  @Input() public bottomBarConfig: BottomBarConfig = {};
  @Input() public isMobile: boolean = false;
  @Input() public navbarEnabled: boolean = false;

  @Output() public bottomBarCloseClickEvent = new EventEmitter<string>();
  @Output() public bottomBarButtonClickEvent = new EventEmitter<string>();

  public actionClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.bottomBarButtonClickEvent.emit(id);
  }

  public closeClicked(): void {
    this.bottomBarCloseClickEvent.emit('bottom-bar_close');
  }

}
