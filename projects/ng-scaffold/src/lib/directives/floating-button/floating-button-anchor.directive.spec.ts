import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScaffoldService } from '../../services/scaffold.service';
import { FloatingButtonAnchorDirective } from './floating-button-anchor.directive';

@Component({
  template: `
    @if (show()) {
      <div class="anchor" lfFloatingButtonAnchor></div>
    }
  `,
  imports: [FloatingButtonAnchorDirective],
})
class HostComponent {
  public show = signal<boolean>(true);
}

describe('FloatingButtonAnchorDirective', () => {
  let service: ScaffoldService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
    service = TestBed.inject(ScaffoldService);
  });

  const render = () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    TestBed.tick();
    return fixture;
  };

  it('registers its element as the anchor', () => {
    const fixture = render();

    expect(service.floatingButtonAnchor).toBe(fixture.nativeElement.querySelector('.anchor'));
  });

  it('clears the anchor once its element is gone', () => {
    const fixture = render();

    fixture.componentInstance.show.set(false);
    fixture.detectChanges();

    expect(service.floatingButtonAnchor).toBeNull();
  });

  // The next page's anchor registers before the old one is destroyed
  it('keeps an anchor that took over', () => {
    const fixture = render();
    const next: HTMLElement = document.createElement('div');
    service.floatingButtonAnchor = next;

    fixture.componentInstance.show.set(false);
    fixture.detectChanges();

    expect(service.floatingButtonAnchor).toBe(next);
  });
});
