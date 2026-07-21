import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TransMap, TranslationConfig } from '../models';
import { CONFIG } from '../scaffold.config';
import { TranslationService } from './translation.service';

const EN: TransMap = { a: '1', nested: { x: 'x-en', y: 'y-en' } };
const DE: TransMap = { a: 'eins', nested: { x: 'x-de' } };
// DE merged over EN: DE wins where present, EN fills the missing `nested.y`.
const MERGED: TransMap = { a: 'eins', nested: { x: 'x-de', y: 'y-en' } };

/** Resolves after all pending microtasks have drained. */
const tick = (): Promise<void> => new Promise<void>((resolve) => setTimeout(resolve));

describe('TranslationService', () => {
  let httpMock: HttpTestingController;

  /** Configures the TestBed with a language config, without injecting the service yet. */
  function configure(language: TranslationConfig): void {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CONFIG, useValue: { production: false, language } },
      ],
    });
    httpMock = TestBed.inject(HttpTestingController);
  }

  /** Flushes a pending request for the given locale. */
  function flush(locale: string, body: TransMap): void {
    httpMock.expectOne(`assets/i18n/${locale}.json`).flush(body);
  }

  beforeEach(() => {
    localStorage.clear();
    // Deterministic browser locale unless a test overrides it.
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US');
  });

  afterEach(() => {
    httpMock.verify();
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it('should be created and expose the configured locales', () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);
    flush('en', EN);

    expect(service).toBeTruthy();
    expect(service.locales).toEqual(['de', 'en']);
  });

  it('detects the browser locale on init and loads its file', async () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-DE');
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);

    flush('de', DE);
    await tick();
    flush('en', EN); // fallback fetched for the merge
    await tick();

    expect(service.locale()).toBe('de');
    expect(service.transMap()).toEqual(MERGED);
    expect(TestBed.inject(DOCUMENT).documentElement.getAttribute('lang')).toBe('de');
  });

  it('falls back to the fallback locale when the browser locale is unsupported', async () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('fr-FR');
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);

    flush('en', EN);
    await tick();

    expect(service.locale()).toBe('en');
  });

  it('switches locale, updates the transMap and html lang attribute', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);
    flush('en', EN); // fallback locale is now cached

    const promise: Promise<void> = service.setLocale('de');
    flush('de', DE);
    await promise;

    expect(service.locale()).toBe('de');
    expect(service.transMap()).toEqual(MERGED);
    expect(TestBed.inject(DOCUMENT).documentElement.getAttribute('lang')).toBe('de');
  });

  it('routes an unknown target locale to the fallback locale', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);
    flush('en', EN);

    const promise: Promise<void> = service.setLocale('es');
    flush('en', EN);
    await promise;

    expect(service.locale()).toBe('en');
  });

  it('deep-merges the fallback locale so keys missing from a partial locale resolve', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);
    flush('en', EN); // fallback locale is now cached

    const promise: Promise<void> = service.setLocale('de');
    flush('de', DE);
    await promise;

    expect(service.transMap()).toEqual(MERGED);
  });

  it('caches locale files and does not refetch them', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);
    flush('en', EN);

    const promise: Promise<void> = service.setLocale('de');
    flush('de', DE); // fallback 'en' is served from cache — no second request
    await promise;

    // Both locales are cached now — switching back issues no request.
    await service.setLocale('en');
    httpMock.expectNone('assets/i18n/en.json');
    expect(service.transMap()).toEqual(EN);
  });

  it('persists the locale and restores it on the next init', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en', persist: true });
    const service = TestBed.inject(TranslationService);
    flush('en', EN);

    const promise: Promise<void> = service.setLocale('de');
    flush('de', DE);
    await promise;

    expect(localStorage.getItem('LANGUAGE')).toBe('"de"');
  });

  it('does not persist when persist is disabled', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en', persist: false });
    const service = TestBed.inject(TranslationService);
    flush('en', EN);

    const promise: Promise<void> = service.setLocale('de');
    flush('de', DE);
    await promise;

    expect(localStorage.getItem('LANGUAGE')).toBeNull();
  });

  it('stays inert and fires no request when no locales are configured', () => {
    configure({ locales: [], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);

    httpMock.expectNone(() => true);
    expect(service.transMap()).toEqual({});
  });

  it('keeps the active locale when the fallback file fails to load', async () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('de-DE');
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);

    flush('de', DE);
    await tick();
    httpMock
      .expectOne('assets/i18n/en.json')
      .flush('', { status: 500, statusText: 'Server Error' });
    await tick();

    expect(service.locale()).toBe('de');
    expect(service.transMap()).toEqual(DE);
  });

  it('does not emit the empty seed on transMap$ before the first load', async () => {
    configure({ locales: ['de', 'en'], fallbackLocale: 'en' });
    const service = TestBed.inject(TranslationService);

    const emissions: TransMap[] = [];
    service.transMap$.subscribe((transMap: TransMap) => emissions.push(transMap));

    // Nothing loaded yet — no emission despite the `{}` seed on the signal.
    await tick();
    expect(emissions).toEqual([]);

    flush('en', EN);
    await tick();
    expect(emissions).toEqual([EN]);
  });

  it('restores a persisted locale on init instead of the browser locale', async () => {
    localStorage.setItem('LANGUAGE', JSON.stringify('de'));
    configure({ locales: ['de', 'en'], fallbackLocale: 'en', persist: true });
    const service = TestBed.inject(TranslationService);

    flush('de', DE);
    await tick();
    flush('en', EN); // fallback fetched for the merge
    await tick();

    expect(service.locale()).toBe('de');
  });
});
