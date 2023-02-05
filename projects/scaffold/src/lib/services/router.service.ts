import { Injectable } from '@angular/core';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Logger } from './';

@Injectable({ providedIn: 'root' })

export class RouterService {

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public get loading$(): Observable<boolean> {
    return this._loading$;
  }

  private _routeHistory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public get routeHistory$(): Observable<string[]> {
    return this._routeHistory$;
  }

  constructor(private router: Router, private logger: Logger) {
    this.router.events.subscribe(event => {
      let asyncLoadCount = 0;

      if (event instanceof RouteConfigLoadStart) { asyncLoadCount++; }
      if (event instanceof RouteConfigLoadEnd) { asyncLoadCount--; }
      if (event instanceof NavigationEnd) {
        const url: string = event.urlAfterRedirects;
        this.logger.log(`current route: ${url}`);

        const routeHistory: string[] = this._routeHistory$.value;
        routeHistory.push(url);

        this._routeHistory$.next(routeHistory);
      }

      this._loading$.next(!!asyncLoadCount);
    });
  }

  public navigateBack(): void {
    const routeHistory: string[] = this._routeHistory$.value;
    routeHistory.pop();
    const lastRoute: string = routeHistory[routeHistory.length - 1] || '';

    if(!lastRoute) {
      return;
    }

    this.router.navigate([lastRoute]);
  }

}
