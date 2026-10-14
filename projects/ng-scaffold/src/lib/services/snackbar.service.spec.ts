import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;

  // Each open() hands back its own dismissal stream, the way MatSnackBar does
  const stubSnackbar = (): { dismissals: Subject<void>[] } => {
    const dismissals: Subject<void>[] = [];
    const snackbar = {
      open: vi.fn(() => {
        const afterDismissed = new Subject<void>();
        dismissals.push(afterDismissed);
        return {
          afterDismissed: () => afterDismissed.asObservable(),
          onAction: () => new Subject<void>().asObservable(),
        };
      }),
    };

    TestBed.configureTestingModule({ providers: [{ provide: MatSnackBar, useValue: snackbar }] });
    service = TestBed.inject(SnackbarService);
    return { dismissals };
  };

  beforeEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarService);
    expect(service).toBeTruthy();
  });

  it('reports no snackbar before one is shown', () => {
    stubSnackbar();
    expect(service.bottomSnackbarOpen()).toBe(false);
  });

  it('reports a bottom snackbar until it is dismissed', () => {
    const { dismissals } = stubSnackbar();

    service.openSnackbar('message', 'close');
    expect(service.bottomSnackbarOpen()).toBe(true);

    dismissals[0].next();
    expect(service.bottomSnackbarOpen()).toBe(false);
  });

  // Opening a second snackbar dismisses the first, so a flag would clear while one is on screen
  it('stays open when a queued snackbar replaces the first', () => {
    const { dismissals } = stubSnackbar();

    service.openSnackbar('first', 'close');
    service.openSnackbar('second', 'close');
    dismissals[0].next();

    expect(service.bottomSnackbarOpen()).toBe(true);

    dismissals[1].next();
    expect(service.bottomSnackbarOpen()).toBe(false);
  });

  it('ignores a snackbar positioned at the top', () => {
    stubSnackbar();
    const config: MatSnackBarConfig = { verticalPosition: 'top' };

    service.openSnackbar('message', 'close', config);

    expect(service.bottomSnackbarOpen()).toBe(false);
  });

  // MatSnackBarConfig defaults to 'bottom', so a config that leaves it out is a bottom one
  it('treats a config without a vertical position as bottom', () => {
    stubSnackbar();
    const config: MatSnackBarConfig = { duration: 1000 };

    service.openSnackbar('message', 'close', config);

    expect(service.bottomSnackbarOpen()).toBe(true);
  });

  it('tracks snackbars opened with an action', () => {
    const { dismissals } = stubSnackbar();

    service.openSnackbarWithAction('message', 'action');
    expect(service.bottomSnackbarOpen()).toBe(true);

    dismissals[0].next();
    expect(service.bottomSnackbarOpen()).toBe(false);
  });
});
