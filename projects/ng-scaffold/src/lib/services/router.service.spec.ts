import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RouterService } from './router.service';

describe('RouterService', () => {
  let service: RouterService;
  let routerEvents$: BehaviorSubject<any>;
  let mockRouter: any;

  beforeEach(() => {
    routerEvents$ = new BehaviorSubject<any>(null);

    mockRouter = {
      events: routerEvents$.asObservable(),
      currentNavigation: jasmine.createSpy('currentNavigation').and.returnValue({ extras: { state: {} } }),
      navigateByUrl: jasmine.createSpy('navigateByUrl').and.returnValue(Promise.resolve(true)),
      navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true)),
    };

    TestBed.configureTestingModule({
      providers: [
        RouterService,
        { provide: Router, useValue: mockRouter },
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });

    service = TestBed.inject(RouterService);
  });

  it('should track current and previous routes', (done) => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    setTimeout(() => {
      expect(service.currentRoute).toBe('/about');
      expect(service.previousRoute).toBe('/home');
      done();
    }, 0);
  });

  it('should push previous route into route history on navigation', (done) => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    setTimeout(() => {
      service.routeHistory$.subscribe(history => {
        expect(history).toEqual(['/home']);
        done();
      });
    }, 0);
  });

  it('should handle back navigation correctly', (done) => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    setTimeout(() => {
      service.navigateBack();
      setTimeout(() => {
        expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/home', { state: { back: true } });
        done();
      }, 0);
    }, 0);
  });

  it('should update loading state on RouteConfigLoad events', (done) => {
    const states: boolean[] = [];

    service.loading$.subscribe(state => states.push(state));

    routerEvents$.next(new RouteConfigLoadStart({} as any));
    routerEvents$.next(new RouteConfigLoadEnd({} as any));

    setTimeout(() => {
      expect(states).toEqual([false, true, false]); // initial, start, end
      done();
    }, 0);
  });

  it('should clear route history', (done) => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    setTimeout(() => {
      service.clearRouteHistory();
      service.routeHistory$.subscribe(history => {
        expect(history).toEqual([]);
        done();
      });
    }, 0);
  });
});
