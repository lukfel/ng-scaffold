import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ErrorHandler, Service } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { LogEntry, LogReporter, ScaffoldLibraryConfig } from '../models';
import { provideScaffold } from '../scaffold.config';
import { Logger } from './logger.service';
import { SKIP_SERVER_LOGGING, ServerLoggingService } from './server-logging.service';

const reported: LogEntry[][] = [];

@Service({ autoProvided: false })
class TestReporter implements LogReporter {
  public report(entries: LogEntry[]): Promise<void> {
    reported.push(entries);
    return Promise.resolve();
  }
}

describe('ServerLoggingService', () => {
  const setup = (config: ScaffoldLibraryConfig): ServerLoggingService => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting(), provideScaffold(config)],
    });
    return TestBed.inject(ServerLoggingService);
  };

  const flush = async (): Promise<void> => {
    vi.advanceTimersByTime(5000);
    await Promise.resolve();
    await Promise.resolve();
  };

  beforeEach(() => {
    reported.length = 0;
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('stays off without a url or class', async () => {
    const service: ServerLoggingService = setup({});
    service.report('[Test - Off]', new Error('boom'));
    await flush();

    expect(reported).toEqual([]);
  });

  it('sends one batch with the error reduced and the query stripped', async () => {
    const service: ServerLoggingService = setup({ serverLogger: TestReporter });
    const error: Error & { code?: string } = new Error('failed at https://api.example.com/x?token=secret');
    error.code = 'permission-denied';
    service.report('[Test - First]', error);
    service.report('[Test - Second]', 'plain text');

    expect(reported).toEqual([]);
    await flush();

    expect(reported.length).toBe(1);
    const [first, second] = reported[0];
    expect(first).toEqual(
      expect.objectContaining({
        tag: '[Test - First]',
        name: 'Error',
        code: 'permission-denied',
        message: 'failed at https://api.example.com/x',
      }),
    );
    expect(first.stack).toBeDefined();
    expect(second.message).toBe('plain text');
  });

  it('drops repeats and stops at the session limit', async () => {
    const service: ServerLoggingService = setup({
      serverLogger: TestReporter,
      serverLoggerOptions: { maxPerSession: 2 },
    });
    service.report('[Test - A]', new Error('same'));
    service.report('[Test - A]', new Error('same'));
    service.report('[Test - B]', new Error('other'));
    service.report('[Test - C]', new Error('over the limit'));
    await flush();

    expect(reported[0].map((entry: LogEntry) => entry.tag)).toEqual(['[Test - A]', '[Test - B]']);
  });

  it('skips requests that never reached a server', async () => {
    const service: ServerLoggingService = setup({ serverLogger: TestReporter });
    service.report('[Test - Offline]', new HttpErrorResponse({ status: 0 }));
    await flush();

    expect(reported).toEqual([]);
  });

  it('lets beforeSend change or drop an entry', async () => {
    const service: ServerLoggingService = setup({
      serverLogger: TestReporter,
      serverLoggerOptions: {
        beforeSend: (entry: LogEntry) => (entry.code === 'ignored' ? null : { ...entry, message: 'changed' }),
      },
    });
    service.report('[Test - Kept]', new Error('original'));
    service.report('[Test - Dropped]', Object.assign(new Error('x'), { code: 'ignored' }));
    await flush();

    expect(reported[0].map((entry: LogEntry) => [entry.tag, entry.message])).toEqual([
      ['[Test - Kept]', 'changed'],
    ]);
  });

  it('swallows a failing report', async () => {
    @Service({ autoProvided: false })
    class FailingReporter implements LogReporter {
      public report(): Promise<void> {
        return Promise.reject(new Error('offline'));
      }
    }
    const service: ServerLoggingService = setup({ serverLogger: FailingReporter });
    service.report('[Test - Fail]', new Error('boom'));

    await expect(flush()).resolves.toBeUndefined();
  });

  it('posts to serverLoggingUrl, marked to be skipped by interceptors', async () => {
    const service: ServerLoggingService = setup({ serverLoggingUrl: '/api/log' });
    const http: HttpTestingController = TestBed.inject(HttpTestingController);
    service.report('[Test - Url]', new Error('boom'));
    await flush();

    const request = http.expectOne('/api/log');
    expect(request.request.method).toBe('POST');
    expect(request.request.body.entries[0].tag).toBe('[Test - Url]');
    expect(request.request.context.get(SKIP_SERVER_LOGGING)).toBe(true);
    request.flush(null);
    http.verify();
  });

  it('prefers the class when both are given', async () => {
    const service: ServerLoggingService = setup({
      serverLoggingUrl: '/api/log',
      serverLogger: TestReporter,
    });
    const http: HttpTestingController = TestBed.inject(HttpTestingController);
    service.report('[Test - Both]', new Error('boom'));
    await flush();

    expect(reported.length).toBe(1);
    http.expectNone('/api/log');
  });

  it('reports Logger.error without its extra arguments', async () => {
    setup({ serverLogger: TestReporter });
    TestBed.inject(Logger).error('[Test - Logger]', new Error('boom'), { fcmToken: 'secret' });
    await flush();

    expect(reported[0][0].tag).toBe('[Test - Logger]');
    expect(JSON.stringify(reported)).not.toContain('secret');
  });

  it('reports uncaught errors through the ErrorHandler', async () => {
    setup({ serverLogger: TestReporter });
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    TestBed.inject(ErrorHandler).handleError(new Error('uncaught'));
    await flush();

    expect(reported[0][0]).toEqual(expect.objectContaining({ tag: '[Global - Uncaught]', message: 'uncaught' }));
  });
});
