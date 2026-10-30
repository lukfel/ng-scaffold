import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Meta } from '@angular/platform-browser';
import { Router, Routes, provideRouter } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ScaffoldLibraryConfig } from '../models';
import { provideScaffold } from '../scaffold.config';
import { SeoService } from './seo.service';

@Component({ template: '', standalone: true })
class PageComponent {}

const BASE = 'https://www.example.com';

// Mirrors a lazy route: the parent carries the data, the empty child renders the page
const ROUTES: Routes = [
  { path: 'inserat/:id', data: { ogType: 'article' }, children: [{ path: '', component: PageComponent }] },
  { path: 'user/:id', data: { ogType: 'profile' }, component: PageComponent },
  { path: '**', component: PageComponent },
];

describe('SeoService', () => {
  const setup = (config: ScaffoldLibraryConfig): SeoService => {
    TestBed.configureTestingModule({ providers: [provideRouter(ROUTES), provideScaffold(config)] });
    return TestBed.inject(SeoService);
  };

  const navigate = async (url: string): Promise<void> => {
    await TestBed.inject(Router).navigateByUrl(url);
  };

  const canonical = (): string | null =>
    document.head.querySelector('link[rel="canonical"]')?.getAttribute('href') ?? null;

  const tag = (property: string): string | null =>
    TestBed.inject(Meta).getTag(`property="${property}"`)?.getAttribute('content') ?? null;

  beforeEach(() => {
    document.head.querySelectorAll('link[rel="canonical"]').forEach((link: Element) => link.remove());
    document.head
      .querySelectorAll('meta[property="og:url"], meta[property="og:type"]')
      .forEach((meta: Element) => meta.remove());
  });

  it('should be created', () => {
    expect(setup({})).toBeTruthy();
  });

  describe('canonical', () => {
    beforeEach(() => {
      setup({ seo: { baseUrl: BASE, indexedParams: ['category', 'state'] } });
    });

    it('builds an absolute canonical from the configured base url', async () => {
      await navigate('/inserat/abc');

      expect(canonical()).toBe(`${BASE}/inserat/abc`);
    });

    it('keeps the indexed params', async () => {
      await navigate('/search?category=Friseur&state=Steiermark');

      expect(canonical()).toBe(`${BASE}/search?category=Friseur&state=Steiermark`);
    });

    // An unlisted param such as a full-text query or a sort is a duplicate of the indexed page
    it('drops every param that is not indexed', async () => {
      await navigate('/search?category=Friseur&search=hallo&sortBy=price&utm_source=newsletter');

      expect(canonical()).toBe(`${BASE}/search?category=Friseur`);
    });

    it('normalises a trailing slash but keeps the root', async () => {
      await navigate('/help/');
      expect(canonical()).toBe(`${BASE}/help`);

      await navigate('/');
      expect(canonical()).toBe(`${BASE}/`);
    });

    it('keeps a single canonical link across navigations', async () => {
      await navigate('/start');
      await navigate('/help');

      expect(document.head.querySelectorAll('link[rel="canonical"]').length).toBe(1);
      expect(canonical()).toBe(`${BASE}/help`);
    });

    it('points og:url at the canonical', async () => {
      await navigate('/user/xyz?utm_source=x');

      expect(tag('og:url')).toBe(`${BASE}/user/xyz`);
    });

    it('reads og:type from route data, inherited by a lazy child, defaulting to website', async () => {
      await navigate('/inserat/abc');
      expect(tag('og:type')).toBe('article');

      await navigate('/user/xyz');
      expect(tag('og:type')).toBe('profile');

      await navigate('/search');
      expect(tag('og:type')).toBe('website');
    });

    // Subscribers of config$ read metaPageTitle, which a canonical-only emission would clear
    it('does not emit on config$', async () => {
      await navigate('/inserat/abc');

      expect(await firstValueFrom(TestBed.inject(SeoService).config$)).toBeNull();
    });
  });

  it('tolerates a trailing slash on the base url', async () => {
    setup({ seo: { baseUrl: `${BASE}/` } });
    await navigate('/help');

    expect(canonical()).toBe(`${BASE}/help`);
  });

  it('leaves the head untouched without a seo config', async () => {
    setup({});
    await navigate('/inserat/abc');

    expect(canonical()).toBeNull();
    expect(tag('og:url')).toBeNull();
  });
});
