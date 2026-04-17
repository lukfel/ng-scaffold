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
  imports: [PortalModule, MatSidenavModule, NgClass, NgTemplateOutlet],
  host: {
    '(document:touchstart)': 'onTouchStart($event)',
    '(document:touchend)': 'onTouchEnd($event)',
  },
})
export class DrawerComponent {
  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly drawerConfig = input<DrawerConfig | null>(null);
  public readonly isMobile = input<boolean>(false);
  public readonly headerEnabled = input<boolean>(false);
  public readonly drawerPortal = input<ComponentPortal<unknown> | TemplatePortal<unknown> | null>();

  public readonly drawerConfigUpdateEvent = output<Partial<DrawerConfig>>();

  private readonly initialized = signal<boolean>(false);

  private touchStartX = 0;
  private readonly TOUCH_ZONE_WIDTH_PX: number = 40;
  private readonly SWIPE_THRESHOLD_PX: number = 30;

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
    }
  }

  // Track touches starting within the left-edge swipe zone
  public onTouchStart(event: TouchEvent): void {
    const x = event.touches[0].clientX;
    this.touchStartX = x <= this.TOUCH_ZONE_WIDTH_PX ? x : -1;
  }

  // Open drawer on rightward swipe originating from the left edge
  public onTouchEnd(event: TouchEvent): void {
    if (this.touchStartX < 0) return;
    const deltaX: number = event.changedTouches[0].clientX - this.touchStartX;
    if (
      deltaX >= this.SWIPE_THRESHOLD_PX &&
      this.isMobile() &&
      this.drawerConfig()?.enable &&
      !this.drawerConfig()?.open
    ) {
      this.drawerConfigUpdateEvent.emit({ open: true });
    }
  }
}
