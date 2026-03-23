import { ComponentPortal, PortalModule, TemplatePortal } from '@angular/cdk/portal';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PortalModule,
    MatSidenavModule,
    NgClass,
    NgTemplateOutlet
]
})
export class DrawerComponent {

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly drawerConfig = input<DrawerConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly headerEnabled = input<boolean>(false);
  public readonly drawerPortal = input<ComponentPortal<unknown> | TemplatePortal<unknown> | null>();

  public readonly drawerConfigUpdateEvent = output<Partial<DrawerConfig>>();

  private readonly initialized = signal<boolean>(false);


  constructor() {
    effect(() => {
      const drawerConfig: DrawerConfig | null = this.drawerConfig();
      if (!drawerConfig || this.initialized()) return;

      this.initialized.set(true);

      if (this.isMobile() && drawerConfig.enable && drawerConfig.open) {
        this.drawerConfigUpdateEvent.emit({ open: false });
      }
    });
  }


  // Detect when the drawer is closed without clicking a button
  public drawerClosed(): void {
    if (this.drawerConfig()) {
      this.drawerConfigUpdateEvent.emit({ open: false });
    };
  }

}
