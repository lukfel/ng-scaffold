import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DrawerConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  standalone: false
})
export class DrawerComponent {

  @Input() public libraryConfig: ScaffoldLibraryConfig | null = null;
  @Input() public drawerConfig: DrawerConfig | null = null;
  @Input() public isMobile: boolean = false;
  @Input() public headerEnabled: boolean = false;
  @Input() public drawerPortal: ComponentPortal<unknown> | TemplatePortal<unknown> | null;

  @Output() public drawerConfigUpdateEvent = new EventEmitter<Partial<DrawerConfig>>();


  // Detect when the drawer is closed without clicking a button
  public drawerClosed(): void {
    if (this.drawerConfig) {
      this.drawerConfigUpdateEvent.emit({ open: false });
    };
  }

}
