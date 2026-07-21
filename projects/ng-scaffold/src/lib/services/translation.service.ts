import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT, Injectable, PLATFORM_ID, Signal, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, filter, firstValueFrom } from 'rxjs';
import { TransMap, TranslationConfig } from '../models';
import { CONFIG } from '../scaffold.config';
import { LocalStorageService } from './local-storage.service';
import { Logger } from './logger.service';

const DEFAULT_CONFIG: Required<Omit<TranslationConfig, 'locales' | 'fallbackLocale'>> = {
  path: 'assets/i18n/',
  persist: true,
};

/**
 * Runtime translation service that switches between per-locale JSON files.
 *
 * Configure it through `provideScaffold({ language: { ... } })`. Each app keeps
 * its own strongly-typed `TransMap` interface and reads the labels via
 * {@link TranslationService.transMapAs}.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly http = inject(HttpClient);
  private readonly document = inject<Document>(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storage = inject(LocalStorageService);
  private readonly logger = inject(Logger);
  private readonly config = this.resolveConfig(inject(CONFIG, { optional: true })?.language);

  private readonly STORAGE_KEY = 'LANGUAGE';

  /** In-memory cache of raw (un-merged) locale files, keyed by locale. */
  private readonly cache = new Map<string, TransMap>();

  /** Distinct empty seed so `transMap$` can suppress the pre-load emission. */
  private readonly EMPTY: TransMap = {};

  private readonly _locale = signal<string>(this.config.fallbackLocale);
  private readonly _transMap = signal<TransMap>(this.EMPTY);
  private readonly _loading = signal<boolean>(false);

  /** The active locale, e.g. `'de'`. */
  public readonly locale = this._locale.asReadonly();
  /** Labels for the active locale (with fallback keys merged in). */
  public readonly transMap = this._transMap.asReadonly();
  /** `true` while a locale file is being fetched. */
  public readonly loading = this._loading.asReadonly();
  /** All configured locales — drives a language picker. */
  public readonly locales: readonly string[] = this.config.locales;

  /** Observable interop for `| async` templates and rxjs consumers. */
  public readonly locale$: Observable<string> = toObservable(this._locale);
  // Suppress the empty seed so subscribers only see loaded translations —
  // consumers that guard on a falsy `transMap` (null/undefined) keep working.
  public readonly transMap$: Observable<TransMap> = toObservable(this._transMap).pipe(
    filter((transMap: TransMap) => transMap !== this.EMPTY),
  );
  public readonly loading$: Observable<boolean> = toObservable(this._loading);

  constructor() {
    this.init();
  }

  /**
   * Typed signal accessor: reads the active labels as the app's own `TransMap`
   * shape, preserving compile-time key checking. Emits `{}` until the first load.
   */
  public transMapAs<T>(): Signal<T> {
    return this._transMap as unknown as Signal<T>;
  }

  /**
   * Typed observable accessor: like {@link transMapAs} but as a stream that only
   * emits once translations are loaded (never the empty seed) — matching a
   * `null`/`undefined`-until-loaded consumption pattern.
   */
  public transMapStream<T>(): Observable<T> {
    return this.transMap$ as unknown as Observable<T>;
  }

  /**
   * Switch the active locale. Unknown locales fall back to `fallbackLocale`.
   * Persistence is governed by the `persist` config option.
   *
   * @param locale target locale (must be one of the configured `locales`)
   */
  public async setLocale(locale: string): Promise<void> {
    await this.applyLocale(locale, this.config.persist);
  }

  private async applyLocale(locale: string, persist: boolean): Promise<void> {
    const target: string = this.config.locales.includes(locale)
      ? locale
      : this.config.fallbackLocale;

    this._locale.set(target);
    this.setHtmlLangAttribute(target);

    if (persist) {
      this.storage.setItem(this.STORAGE_KEY, target);
    }

    await this.loadTranslations(target);
  }

  private init(): void {
    // No locales configured — stay inert (no stray request to `<fallback>.json`).
    if (!this.config.locales.length) {
      return;
    }

    const stored: string | null = this.config.persist
      ? this.storage.getItem<string>(this.STORAGE_KEY)
      : null;
    const initial: string =
      stored && this.config.locales.includes(stored) ? stored : this.detectLocale();
    // Already persisted (or intentionally not) — don't rewrite storage on startup.
    this.applyLocale(initial, false);
  }

  private detectLocale(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return this.config.fallbackLocale;
    }

    const browserLocale: string = navigator.language.slice(0, 2);
    return this.config.locales.includes(browserLocale) ? browserLocale : this.config.fallbackLocale;
  }

  private async loadTranslations(locale: string): Promise<void> {
    this._loading.set(true);

    try {
      const active: TransMap = await this.fetchLocale(locale);

      let merged: TransMap = active;
      if (locale !== this.config.fallbackLocale) {
        try {
          const fallback: TransMap = await this.fetchLocale(this.config.fallbackLocale);
          merged = deepMerge(fallback, active);
        } catch (error) {
          // Fallback file unavailable — keep the loaded active locale rather than
          // discarding it and rendering blank.
          this.logger.warn(
            `[TRANSLATION] Fallback locale '${this.config.fallbackLocale}' failed to load`,
            error,
          );
        }
      }

      // Ignore stale responses if the locale changed while loading.
      if (this._locale() === locale) {
        this._transMap.set(merged);
      }
    } catch (error) {
      this.logger.error(`[TRANSLATION] Failed to load locale '${locale}'`, error);
    } finally {
      this._loading.set(false);
    }
  }

  private async fetchLocale(locale: string): Promise<TransMap> {
    const cached: TransMap | undefined = this.cache.get(locale);
    if (cached) {
      return cached;
    }

    const data: TransMap = await firstValueFrom(
      this.http.get<TransMap>(`${this.config.path}${locale}.json`),
    );
    this.cache.set(locale, data);
    return data;
  }

  private setHtmlLangAttribute(locale: string): void {
    this.document?.documentElement?.setAttribute('lang', locale);
  }

  private resolveConfig(config?: TranslationConfig): Required<TranslationConfig> {
    const path: string = config?.path ?? DEFAULT_CONFIG.path;
    return {
      locales: config?.locales ?? [],
      fallbackLocale: config?.fallbackLocale ?? config?.locales?.[0] ?? 'en',
      path: path.endsWith('/') ? path : `${path}/`,
      persist: config?.persist ?? DEFAULT_CONFIG.persist,
    };
  }
}

/** Deep-merges `override` onto `base`, returning a new object (pure). */
function deepMerge(base: TransMap, override: TransMap): TransMap {
  const result: TransMap = { ...base };

  for (const key of Object.keys(override)) {
    const overrideValue: string | TransMap = override[key];
    const baseValue: string | TransMap | undefined = result[key];

    result[key] =
      isTransMap(baseValue) && isTransMap(overrideValue)
        ? deepMerge(baseValue, overrideValue)
        : overrideValue;
  }

  return result;
}

function isTransMap(value: string | TransMap | undefined): value is TransMap {
  return typeof value === 'object' && value !== null;
}
