import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Service, inject } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Service()
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);

  public readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(distinctUntilChanged());
}
