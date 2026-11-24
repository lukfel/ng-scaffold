import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpContext, HttpContextToken, HttpErrorResponse } from '@angular/common/http';
import {
  DOCUMENT,
  ErrorHandler,
  InjectionToken,
  Injector,
  PLATFORM_ID,
  Service,
  inject,
} from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LogEntry, LogReporter, ScaffoldLibraryConfig } from '../models';
import { CONFIG } from '../scaffold.config';

export const LOG_REPORTER = new InjectionToken<LogReporter>('logReporter');

// Marks the log request itself, so interceptors can leave it out of their own error handling
export const SKIP_SERVER_LOGGING = new HttpContextToken<boolean>(() => false);

const DEFAULT_BATCH_DELAY: number = 5000;
const DEFAULT_MAX_PER_SESSION: number = 10;
const MAX_TAG_LENGTH: number = 200;
const MAX_MESSAGE_LENGTH: number = 500;
const MAX_STACK_LINES: number = 10;

@Service()
export class ServerLoggingService {
  private libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });
  private injector = inject(Injector);
  private document = inject<Document>(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  private pending: LogEntry[] = [];
  private seen: Set<string> = new Set<string>();
  private timer: ReturnType<typeof setTimeout> | null = null;

  /**
   * Queues an error for the configured `serverLoggingUrl` or `serverLogger`, sent in batches
   *
   * @param tag context of the error, e.g. `[Scope - Action]`
   * @param error the caught error, only its name, code, message and stack are sent
   */
  public report(tag: string, error?: unknown): void {
    const config: ScaffoldLibraryConfig | null = this.libraryConfig;
    if (!config?.serverLoggingUrl && !config?.serverLogger) return;
    if (!isPlatformBrowser(this.platformId)) return;
    // An aborted or offline request says nothing about the app
    if (error instanceof HttpErrorResponse && error.status === 0) return;

    let entry: LogEntry | null = this.toEntry(tag, error);
    const beforeSend = config.serverLoggerOptions?.beforeSend;
    if (beforeSend) {
      try {
        entry = beforeSend(entry, error);
      } catch {
        return;
      }
    }
    if (!entry) return;

    const key: string = `${entry.tag}|${entry.message ?? ''}`;
    const maxPerSession: number =
      config.serverLoggerOptions?.maxPerSession ?? DEFAULT_MAX_PER_SESSION;
    if (this.seen.has(key) || this.seen.size >= maxPerSession) return;
    this.seen.add(key);

    this.pending.push(entry);
    this.timer ??= setTimeout(
      () => this.flush(),
      config.serverLoggerOptions?.batchDelay ?? DEFAULT_BATCH_DELAY,
    );
  }

  private flush(): void {
    this.timer = null;
    const entries: LogEntry[] = this.pending;
    this.pending = [];

    // Resolved late: a reporter using HttpClient pulls in interceptors, which inject the Logger
    const reporter: LogReporter | null = this.injector.get(LOG_REPORTER, null);
    if (!reporter || !entries.length) return;

    // Never logged, a failing report would report itself
    Promise.resolve()
      .then(() => reporter.report(entries))
      .catch(() => undefined);
  }

  private toEntry(tag: string, error: unknown): LogEntry {
    const fields = (typeof error === 'object' && error !== null ? error : {}) as Record<
      string,
      unknown
    >;
    const message: unknown = typeof error === 'string' ? error : fields['message'];
    const code: unknown = fields['code'] ?? fields['status'];
    const stack: unknown = fields['stack'];

    return {
      tag: tag.slice(0, MAX_TAG_LENGTH),
      name: typeof fields['name'] === 'string' ? fields['name'] : undefined,
      code: typeof code === 'string' || typeof code === 'number' ? String(code) : undefined,
      message:
        typeof message === 'string' ? this.scrub(message).slice(0, MAX_MESSAGE_LENGTH) : undefined,
      stack:
        typeof stack === 'string'
          ? this.scrub(stack.split('\n').slice(0, MAX_STACK_LINES).join('\n'))
          : undefined,
      path: this.document.location?.pathname ?? '',
      timestamp: new Date().toISOString(),
    };
  }

  // Query strings can carry tokens, ids or search terms
  private scrub(text: string): string {
    return text.replace(/\?[^\s'"()]*/g, '');
  }
}

/**
 * Posts `{ entries }` to `serverLoggingUrl` through the app's HttpClient, so its interceptors apply
 */
@Service({ autoProvided: false })
export class UrlLogReporter implements LogReporter {
  private http = inject(HttpClient, { optional: true });
  private libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });

  private warned: boolean = false;

  public async report(entries: LogEntry[]): Promise<void> {
    const url: string | undefined = this.libraryConfig?.serverLoggingUrl;
    if (!url) return;
    if (!this.http) {
      // Not through Logger, which injects the service that calls this
      if (!this.warned && this.libraryConfig?.production === false) {
        console.warn('[Scaffold - ServerLogging] serverLoggingUrl needs provideHttpClient()'); // eslint-disable-line no-console
      }
      this.warned = true;
      return;
    }

    await firstValueFrom(
      this.http.post<void>(
        url,
        { entries },
        { context: new HttpContext().set(SKIP_SERVER_LOGGING, true) },
      ),
    );
  }
}

/**
 * Reports uncaught errors as `[Global - Uncaught]`, registered by provideScaffold once server logging is set
 */
@Service({ autoProvided: false })
export class ScaffoldErrorHandler extends ErrorHandler {
  private serverLogging = inject(ServerLoggingService);

  public override handleError(error: unknown): void {
    super.handleError(error);
    this.serverLogging.report('[Global - Uncaught]', error);
  }
}
