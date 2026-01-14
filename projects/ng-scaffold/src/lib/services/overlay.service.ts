
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { ScaffoldLibraryConfig } from '../models';
import { CONFIG } from '../scaffold.config';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  public libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private overlay = inject(Overlay);
  private logger = inject(Logger);


  private overlayRef: OverlayRef | null = null;


  public open<T>(component: ComponentType<T>): void {
    if (this.overlayRef) return;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    if (this.libraryConfig?.debugging) this.logger.log('[Overlay] attach', this.overlayRef);

    const portal: ComponentPortal<T> = new ComponentPortal(component);
    this.overlayRef.attach(portal);
  }

  public close(): void {
    if (!this.overlayRef) return;

    if (this.libraryConfig?.debugging) this.logger.log('[Overlay] detach', this.overlayRef);
    this.overlayRef.detach();
    this.overlayRef.dispose();
    this.overlayRef = null;
  }
}
