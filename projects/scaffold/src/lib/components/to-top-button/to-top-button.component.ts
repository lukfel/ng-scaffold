import { Component, Input } from '@angular/core';
import { ToTopButtonConfig } from '../../models';

@Component({
  selector: 'lf-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.scss']
})
export class ToTopButtonComponent {

  @Input() public toTopButtonConfig: ToTopButtonConfig = {};
  @Input() public scrollElement: HTMLElement;
  @Input() public autoHide: boolean = true;
  @Input() public moveUp: boolean = false;

  public backToTop(): void {
    if (this.scrollElement) {
      this.scrollElement.scrollTop = 0;
    }
  }

  public getButtomPosition(): number {
    return this.moveUp ? 72 + 24 : 24;
  }

}
