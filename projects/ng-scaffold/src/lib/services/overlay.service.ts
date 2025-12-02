
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlay = inject(Overlay);
  private overlayRef: OverlayRef | null = null;


  public open<T>(component: ComponentType<T>): void {
    if (this.overlayRef) return;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const portal: ComponentPortal<T> = new ComponentPortal(component);
    this.overlayRef.attach(portal);
  }

  public close(): void {
    if (!this.overlayRef) return;
    this.overlayRef.detach();
    this.overlayRef.dispose();
    this.overlayRef = null;
  }
}
