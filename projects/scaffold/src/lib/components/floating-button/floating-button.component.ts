import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FloatingButtonConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent {

  @Input() public floatingButtonConfig: FloatingButtonConfig = {};
  @Input() public autoHide: boolean = true;
  @Input() public moveUp: boolean = false;

  @Output() public floatingButtonClickEvent = new EventEmitter<string>();

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id);
  }

  public getBottomPosition(): number {
    return this.moveUp ? 80 + 24 : 24;
  }

}
