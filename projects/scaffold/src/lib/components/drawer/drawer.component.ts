import { Component, Input, OnInit } from '@angular/core';
import { DrawerConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() public drawerConfig: DrawerConfig = {};
  @Input() public isMobile: boolean = false;

  ngOnInit(): void {
    // Avoid initializing an open drawer on mobile
    if(this.isMobile && this.drawerConfig?.enable && this.drawerConfig?.open) {
      this.drawerConfig.open = false;
    }
  }

  // Detect when the drawer is closed without clicking a button
  public onDrawerClosed(): void {
    this.drawerConfig.open = false;
  }

}
