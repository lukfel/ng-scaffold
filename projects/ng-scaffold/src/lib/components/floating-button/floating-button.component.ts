import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FloatingButtonConfig, ScaffoldLibraryConfig } from '../../models';

@Component({
  selector: 'lf-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule, NgClass],
})
export class FloatingButtonComponent {
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  public readonly libraryConfig = input<ScaffoldLibraryConfig | null>(null);
  public readonly floatingButtonConfig = input<FloatingButtonConfig | null>(null);
  public readonly onTop = input<boolean>(false);
  public readonly isMobile = input<boolean>(false);
  public readonly drawerEnabled = input<boolean>(false);
  public readonly navbarEnabled = input<boolean>(false);
  public readonly bottomBarEnabled = input<boolean>(false);
  public readonly bottomSnackbarOpen = input<boolean>(false);
  public readonly anchor = input<HTMLElement | null>(null);

  public readonly floatingButtonConfigUpdateEvent = output<Partial<FloatingButtonConfig>>();
  public readonly floatingButtonClickEvent = output<string>();

  // Centre of the anchor, counted from where the button's left offset starts
  public readonly anchorLeft = signal<number | null>(null);

  private readonly initialized = signal<boolean>(false);
  private readonly sticky = computed<boolean>(() => !!this.floatingButtonConfig()?.sticky);

  constructor() {
    effect(() => {
      const floatingButtonConfig: FloatingButtonConfig | null = this.floatingButtonConfig();
      if (!floatingButtonConfig || this.initialized()) return;

      this.initialized.set(true);

      const updatedFloatingButtonConfigConfig: Partial<FloatingButtonConfig> = {
        matIcon:
          !floatingButtonConfig.matIcon && !floatingButtonConfig.svgIcon
            ? 'arrow_upward'
            : floatingButtonConfig.matIcon || floatingButtonConfig.svgIcon,
        horizontalPosition: floatingButtonConfig.horizontalPosition ?? 'right',
      };

      if (
        JSON.stringify(updatedFloatingButtonConfigConfig) !== JSON.stringify(floatingButtonConfig)
      ) {
        this.floatingButtonConfigUpdateEvent.emit(updatedFloatingButtonConfigConfig);
      }
    });

    effect((onCleanup) => {
      const anchor: HTMLElement | null = this.anchor();
      if (!anchor || typeof ResizeObserver === 'undefined') {
        this.anchorLeft.set(null);
        return;
      }

      // A sticky button is offset from its scroll container, a fixed one from the viewport
      const host: HTMLElement = this.elementRef.nativeElement;
      const scroller: HTMLElement | null = this.sticky() ? this.scrollContainer(host) : null;
      const measure = (): void => {
        if (!anchor.isConnected) return this.anchorLeft.set(null);

        const rect: DOMRect = anchor.getBoundingClientRect();
        const origin: number = scroller?.getBoundingClientRect().left ?? 0;
        this.anchorLeft.set(rect.left + rect.width / 2 - origin);
      };

      // The content resizes with the drawer, which moves a width-capped anchor without resizing it
      const observer: ResizeObserver = new ResizeObserver(measure);
      observer.observe(anchor);
      if (host.parentElement) observer.observe(host.parentElement);
      onCleanup(() => observer.disconnect());
    });
  }

  public buttonClicked(id?: string): void {
    this.floatingButtonClickEvent.emit(id || '');
  }

  private scrollContainer(element: HTMLElement): HTMLElement | null {
    let parent: HTMLElement | null = element.parentElement;
    while (parent && !/(auto|scroll)/.test(getComputedStyle(parent).overflowY)) {
      parent = parent.parentElement;
    }
    return parent;
  }
}
