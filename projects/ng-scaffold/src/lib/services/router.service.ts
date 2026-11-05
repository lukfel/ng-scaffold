import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RouterService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _routeHistory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get routeHistory$(): Observable<string[]> {
    return this._routeHistory$.asObservable();
  }

  public get routeHistory(): string[] {
    return this._routeHistory$.value;
  }

  private _currentRoute$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get currentRoute$(): Observable<string> {
    return this._currentRoute$.asObservable();
  }

  public get currentRoute(): string {
    return this._currentRoute$.value;
  }

  private _previousRoute$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get previousRoute$(): Observable<string> {
    return this._previousRoute$.asObservable();
  }

  public get previousRoute(): string {
    return this._previousRoute$.value;
  }

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      history.replaceState({ ...history.state, back: false }, '');
    }

    this.router.events.subscribe((event) => {
      let asyncLoadCount: number = 0;

      if (event instanceof RouteConfigLoadStart) {
        asyncLoadCount++;
      }
      if (event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--;
      }
      if (event instanceof NavigationEnd) {
        const previousRoute: string = this._currentRoute$.value;
        this._previousRoute$.next(previousRoute);

        const currentRoute: string = event.urlAfterRedirects;
        this._currentRoute$.next(currentRoute);

        if (!this.router.currentNavigation()?.extras?.state?.['back']) {
          if (previousRoute) {
            // A new array rather than a push into the stored one: the scaffold reads this
            // through toSignal, which compares by reference, so a mutated array never
            // reaches the back button and it only appears once something else happens to
            // run change detection
            this._routeHistory$.next([...this._routeHistory$.value, previousRoute]);
          }
        }
      }

      this._loading$.next(!!asyncLoadCount);
    });
  }

  /**
   * Navigates to the previous route found in the routeHistory Observable
   *
   * @param fallbackRoute fallback in case there is no previous route
   */
  public navigateBack(fallbackRoute?: string): void {
    this._routeHistory$.pipe(take(1)).subscribe((routeHistory) => {
      if (routeHistory.length > 0) {
        const previousRoute: string = routeHistory[routeHistory.length - 1];

        if (previousRoute) {
          this.router.navigateByUrl(previousRoute, { state: { back: true } }).then((result) => {
            if (result) {
              this._routeHistory$.next(routeHistory.slice(0, -1));
            }
          });
        } else if (fallbackRoute) {
          this.router.navigate([fallbackRoute]);
        }
      }
    });
  }

  /**
   * Add a route to the history, e.g. the parent page of a deep link that arrived without one,
   * so the back navigation has somewhere to go
   *
   * @param route route the next back navigation leads to
   */
  public pushRouteHistory(route: string): void {
    this._routeHistory$.next([...this._routeHistory$.value, route]);
  }

  /**
   * Clear the current route history
   */
  public clearRouteHistory(): void {
    this._routeHistory$.next([]);
  }
}
