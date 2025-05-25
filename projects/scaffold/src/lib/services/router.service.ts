import { Injectable } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class RouterService {

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _routeHistory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get routeHistory$(): Observable<string[]> {
    return this._routeHistory$.asObservable();
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

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      let asyncLoadCount = 0;

      if (event instanceof RouteConfigLoadStart) { asyncLoadCount++; }
      if (event instanceof RouteConfigLoadEnd) { asyncLoadCount--; }
      if (event instanceof NavigationEnd) {
        const previousRoute: string = this._currentRoute$.value;
        this._previousRoute$.next(previousRoute);

        const currentRoute: string = event.urlAfterRedirects;
        this._currentRoute$.next(currentRoute);

        if (!this.router.getCurrentNavigation()?.extras?.state?.['back']) {
          const routeHistory: string[] = this._routeHistory$.value;
          routeHistory.push(currentRoute);

          this._routeHistory$.next(routeHistory);
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
    this._routeHistory$.pipe(take(1)).subscribe(routeHistory => {
      if (routeHistory.length > 1) {
        const previousRoute: string = routeHistory[routeHistory.length - 2];

        if (previousRoute) {
          this.router.navigateByUrl(previousRoute, { state: { back: true } }).then(result => {
            if (result) {
              routeHistory.pop();
            }
          });
        } else if (fallbackRoute) {
          this.router.navigate([fallbackRoute]);
        }
      }
    })
  }

}
