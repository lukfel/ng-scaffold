import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { vi } from 'vitest';
import { RouterService } from './router.service';

describe('RouterService', () => {
  let service: RouterService;
  let routerEvents$: BehaviorSubject<any>;
  let mockRouter: any;

  beforeEach(() => {
    routerEvents$ = new BehaviorSubject<any>(null);

    mockRouter = {
      events: routerEvents$.asObservable(),
      currentNavigation: vi.fn().mockReturnValue({ extras: { state: {} } }),
      navigateByUrl: vi.fn().mockResolvedValue(true),
      navigate: vi.fn().mockResolvedValue(true),
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

  it('should track current and previous routes', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(service.currentRoute).toBe('/about');
    expect(service.previousRoute).toBe('/home');
  });

  it('should push previous route into route history on navigation', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));

    await new Promise<void>(resolve => {
      service.routeHistory$.subscribe(history => {
        expect(history).toEqual(['/home']);
        resolve();
      });
    });
  });

  // Consumers read the history through toSignal, which compares by reference. Pushing into
  // the stored array and re-emitting it leaves them on the value they first saw, which is
  // what hid the content title card's back button until something else ran change detection.
  it('should emit a new array for every history change', async () => {
    const emissions: string[][] = [];
    service.routeHistory$.subscribe(history => emissions.push(history));

    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));
    routerEvents$.next(new NavigationEnd(3, '/contact', '/contact'));

    await new Promise(resolve => setTimeout(resolve, 0));

    expect(emissions.map(history => history.length)).toEqual([0, 1, 2]);
    expect(new Set(emissions).size).toBe(emissions.length);
  });

  it('should handle back navigation correctly', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));
    service.navigateBack();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/home', { state: { back: true } });
  });

  it('should drop the route it navigated back to, as a new array', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));

    const emissions: string[][] = [];
    service.routeHistory$.subscribe(history => emissions.push(history));

    service.navigateBack();
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(emissions.map(history => history.length)).toEqual([1, 0]);
    expect(emissions[0]).not.toBe(emissions[1]);
  });

  it('should clear route history', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));
    service.clearRouteHistory();

    await new Promise<void>(resolve => {
      service.routeHistory$.subscribe(history => {
        expect(history).toEqual([]);
        resolve();
      });
    });
  });
});
