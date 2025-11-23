import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { merge, shareReplay, Subject, withLatestFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);


  private retrigger$ = new Subject<void>();
  private readonly base$ = this.breakpointObserver
    .observe([
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall,
    ]).pipe(shareReplay({ bufferSize: 1, refCount: true }));

  public readonly breakpoint$ = merge(this.base$, this.retrigger$.pipe(withLatestFrom(this.base$, (_, value) => value)));

  public retriggerBreakpoint(): void {
    this.retrigger$.next();
  }
}
