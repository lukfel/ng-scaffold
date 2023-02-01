import { Component, Input } from '@angular/core';
import { DrawerConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  @Input() public drawerConfig: DrawerConfig = {};
  @Input() public isMobile: boolean = false;

  // Detect when the drawer is closed without clicking a button
  public onDrawerClosed(): void {
    this.drawerConfig.open = false;
  }

}
