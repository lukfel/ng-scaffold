import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BottomBarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  animations: [
    trigger('slideUpDown', [
      state('void', style({ transform: 'translateY(100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition(':enter', [style({ transform: 'translateY(100%)' }), animate('200ms linear')]),
      transition(':leave', [animate('200ms linear', style({ transform: 'translateY(100%)' }))])
    ])
  ],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class BottomBarComponent {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public bottomBarConfig: BottomBarConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public navbarEnabled: boolean = false;

  @Output() public bottomBarCloseClickEvent = new EventEmitter<string>();
  @Output() public bottomBarButtonClickEvent = new EventEmitter<string>();


  public buttonClicked(id?: string): void {
    if (!id) {
      return;
    }

    this.bottomBarButtonClickEvent.emit(id);
  }

  public closeClicked(closeButtonId: string): void {
    this.bottomBarCloseClickEvent.emit(closeButtonId);
  }

}
