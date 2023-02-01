import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs';
import { Logger } from './';

@Injectable({ providedIn: 'root' })
export class BreakpointService {

  public readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(
      tap(value => this.logger.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver, private logger: Logger) { }

}
