import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloatingButtonConfig } from '../../models';

@Component({
    selector: 'lf-floating-button',
    templateUrl: './floating-button.component.html',
    styleUrls: ['./floating-button.component.scss'],
    standalone: false
})
export class FloatingButtonComponent implements OnInit {

  @Input() public floatingButtonConfig: FloatingButtonConfig = {};
  @Input() public onTop: boolean = false;
  @Input() public isMobile: boolean = false;
  @Input() public bottomBarEnabled: boolean = false;

  @Output() public floatingButtonClickEvent = new EventEmitter<string>();

  private readonly DEFAULT_OFFSET: number = 24;
  private navbarOffset: number = 80;
  private bottomBarOffset: number = 56;

  ngOnInit(): void {
    if (!this.floatingButtonConfig?.horizontalPosition) {
      this.floatingButtonConfig.horizontalPosition = 'right';
    }

    if (!this.floatingButtonConfig?.matIcon && !this.floatingButtonConfig?.svgIcon) {
      this.floatingButtonConfig.matIcon = 'arrow_upward';
    }

    if (!this.floatingButtonConfig?.bottomPositionPx) {
      this.floatingButtonConfig.bottomPositionPx = this.DEFAULT_OFFSET;
    }
  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id);
  }

  public getBottomPosition(): number {
    let bottomPosition: number = this.floatingButtonConfig.bottomPositionPx || this.DEFAULT_OFFSET;

    if (this.isMobile) {
      bottomPosition += this.navbarOffset;
    }

    if (this.bottomBarEnabled) {
      bottomPosition += this.bottomBarOffset;
    }

    return bottomPosition;
  }

}
