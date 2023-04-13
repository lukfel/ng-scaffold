import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloatingButtonConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {

  @Input() public floatingButtonConfig: FloatingButtonConfig = {};
  @Input() public onTop: boolean = false;
  @Input() public isMobile: boolean = false;

  @Output() public floatingButtonClickEvent = new EventEmitter<string>();

  ngOnInit(): void {
    if (!this.floatingButtonConfig.horizontalPosition) {
      this.floatingButtonConfig.horizontalPosition = 'right';
    }
  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id);
  }

  public getBottomPosition(): number {
    return this.isMobile ? 80 + 24 : 24;
  }

}
