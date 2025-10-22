import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BottomBarConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  standalone: false
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
