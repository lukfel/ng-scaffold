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


  ngOnInit(): void {
    if (this.floatingButtonConfig) {
      const updatedFloatingButtonConfigConfig: FloatingButtonConfig = {
        ...this.floatingButtonConfig,
        matIcon: (!this.floatingButtonConfig.matIcon && !this.floatingButtonConfig.svgIcon) ? 'arrow_upward' : this.floatingButtonConfig.matIcon || this.floatingButtonConfig.svgIcon,
        horizontalPosition: this.floatingButtonConfig.horizontalPosition ?? 'right'
      };

      if (JSON.stringify(updatedFloatingButtonConfigConfig) !== JSON.stringify(this.floatingButtonConfig)) {
        this.floatingButtonConfigUpdateEvent.emit(updatedFloatingButtonConfigConfig);
      }
    }

  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id);
  }

}
