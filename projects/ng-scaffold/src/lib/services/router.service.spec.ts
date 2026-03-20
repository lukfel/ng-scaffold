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

  it('should handle back navigation correctly', async () => {
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    routerEvents$.next(new NavigationEnd(2, '/about', '/about'));

    await new Promise(resolve => setTimeout(resolve, 0));
    service.navigateBack();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/home', { state: { back: true } });
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
