import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { DrawerConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: false
})
export class DrawerComponent implements OnInit {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public drawerConfig: DrawerConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public fixedOffset: number = 0;
  @Input() public drawerPortal: ComponentPortal<unknown> | TemplatePortal<unknown> | null;


  ngOnInit(): void {
    // Avoid initializing an open drawer on mobile
    if (this.isMobile && this.drawerConfig?.enable && this.drawerConfig?.open) {
      this.drawerConfig.open = false;
    }
  }

  // Detect when the drawer is closed without clicking a button
  public onDrawerClosed(): void {
    if (this.drawerConfig) this.drawerConfig.open = false;
  }

}
