import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FloatingButtonConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  standalone: false
})
export class FloatingButtonComponent implements OnInit {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public floatingButtonConfig: FloatingButtonConfig | null = null;
  @Input() public onTop: boolean = false;
  @Input() public isMobile: boolean = false;
  @Input() public bottomBarEnabled: boolean = false;

  @Output() public floatingButtonConfigUpdateEvent = new EventEmitter<FloatingButtonConfig>();
  @Output() public floatingButtonClickEvent = new EventEmitter<string>();


  private readonly DEFAULT_OFFSET: number = 24;
  private navbarOffset: number = 64;
  private bottomBarOffset: number = 56;


  ngOnInit(): void {
    if (this.floatingButtonConfig) {
      const updatedFloatingButtonConfigConfig: FloatingButtonConfig = {
        ...this.floatingButtonConfig,
        matIcon: (!this.floatingButtonConfig.matIcon && !this.floatingButtonConfig.svgIcon) ? 'arrow_upward' : this.floatingButtonConfig.matIcon || this.floatingButtonConfig.svgIcon,
        horizontalPosition: this.floatingButtonConfig.horizontalPosition ?? 'right',
        bottomPositionPx: this.floatingButtonConfig.bottomPositionPx ?? this.DEFAULT_OFFSET,
      };

      if (JSON.stringify(updatedFloatingButtonConfigConfig) !== JSON.stringify(this.floatingButtonConfig)) {
        this.floatingButtonConfigUpdateEvent.emit(updatedFloatingButtonConfigConfig);
      }
    }

  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id);
  }

  public getBottomPosition(): number {
    let bottomPosition: number = this.floatingButtonConfig?.bottomPositionPx || this.DEFAULT_OFFSET;

    if (this.isMobile) {
      bottomPosition += this.navbarOffset;
    }

    if (this.bottomBarEnabled) {
      bottomPosition += this.bottomBarOffset;
    }

    return bottomPosition;
  }

}
