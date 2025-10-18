import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable, inject } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);


  public readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      distinctUntilChanged()
    );

}
