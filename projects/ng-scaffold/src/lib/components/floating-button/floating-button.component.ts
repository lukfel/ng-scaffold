import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FloatingButtonConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class FloatingButtonComponent implements OnInit {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public floatingButtonConfig: FloatingButtonConfig | null = null;
  @Input() public onTop: boolean = false;
  @Input() public isMobile: boolean = false;
  @Input() public bottomBarEnabled: boolean = false;

  @Output() public floatingButtonConfigUpdateEvent = new EventEmitter<Partial<FloatingButtonConfig>>();
  @Output() public floatingButtonClickEvent = new EventEmitter<string>();


  ngOnInit(): void {
    if (this.floatingButtonConfig) {
      const updatedFloatingButtonConfigConfig: Partial<FloatingButtonConfig> = {
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
