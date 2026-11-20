import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
import { ScaffoldService } from '../../services/scaffold.service';

// The floating button centres itself horizontally under the element carrying this directive
@Directive({
  selector: '[lfFloatingButtonAnchor]',
})
export class FloatingButtonAnchorDirective {
  private scaffoldService = inject(ScaffoldService);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);

  constructor() {
    const element: HTMLElement = this.elementRef.nativeElement;

    // Browser only, there is nothing to measure on the server
    afterNextRender(() => (this.scaffoldService.floatingButtonAnchor = element));

    // The next page's anchor may already have taken over, which has to stay
    this.destroyRef.onDestroy(() => {
      if (this.scaffoldService.floatingButtonAnchor === element) {
        this.scaffoldService.floatingButtonAnchor = null;
      }
    });
  }
}
