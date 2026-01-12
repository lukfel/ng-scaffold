import { ComponentPortal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    PortalModule
  ]
})
export class DrawerComponent implements OnInit {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly drawerConfig = input<DrawerConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly headerEnabled = input<boolean>(false);
  public readonly drawerPortal = input<ComponentPortal<unknown> | TemplatePortal<unknown> | null>();

  public readonly drawerConfigUpdateEvent = output<Partial<DrawerConfig>>();


  ngOnInit(): void {
    // Avoid initializing an open drawer on mobile
    const drawerConfig = this.drawerConfig();
    if (this.isMobile() && drawerConfig?.enable && drawerConfig?.open) {
      this.drawerConfigUpdateEvent.emit({ open: false });
    }
  }


  // Detect when the drawer is closed without clicking a button
  public drawerClosed(): void {
    if (this.drawerConfig()) {
      this.drawerConfigUpdateEvent.emit({ open: false });
    };
  }

}
