import { DOCUMENT, inject, Injectable, InjectionToken } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { SeoConfig, SeoLibraryConfig } from '../models';
import { Logger } from './logger.service';

// Own token rather than CONFIG, because provideScaffold imports this service to start it
export const SEO_LIBRARY_CONFIG = new InjectionToken<SeoLibraryConfig>('seoLibraryConfig');

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private metaTitle = inject(Title);
  private metaTags = inject(Meta);
  private document = inject<Document>(DOCUMENT);
  private logger = inject(Logger);
  private router = inject(Router);
  private libraryConfig = inject(SEO_LIBRARY_CONFIG, { optional: true });

  private _config$: BehaviorSubject<SeoConfig | null> = new BehaviorSubject<SeoConfig | null>(null);

  public get config$(): Observable<SeoConfig | null> {
    return this._config$.asObservable();
  }

  constructor() {
    // Opt in through provideScaffold({ seo }), so apps without it keep their head untouched.
    // Driven by the router rather than setMetaTags, so a page cannot forget it, and kept off
    // config$, whose subscribers read metaPageTitle and would see it cleared.
    if (!this.libraryConfig) return;

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event: NavigationEnd) => this._setCanonical(event.urlAfterRedirects));
  }

  /**
   * Pass a configuration to set meta tags such as title, description and image for search results and social media
   *
   * @param seoConfig config that contains all the meta information
   *
   */
  public setMetaTags(seoConfig: SeoConfig): void {
    this._config$.next(seoConfig);

    const autoTrim: boolean = seoConfig.autoTrim || false;
    const title: string = seoConfig.metaPageTitle || '';
    const description: string = seoConfig.metaPageDescription || '';
    const imagePath: string = seoConfig.metaImagePath || '';
    const imagePathIsAbsolute: boolean = seoConfig.metaImagePathIsAbsolute || false;
    const titleLimit: number = 60;
    const descriptionLimit: number = 160;

    // Set meta title
    if (title) {
      if (autoTrim && title.length > titleLimit) {
        this.logger.error(
          `[SeoService] The set meta title is too long. Recommended length is ${titleLimit}. The title will be trimmed.`,
        );
      }
      const titleTrim: string =
        title.length > titleLimit ? title.substring(0, titleLimit - 3) + '...' : title;
      this._setMetaTitle(autoTrim ? titleTrim : title);
    }

    // Set meta description
    if (description) {
      if (autoTrim && description.length > descriptionLimit) {
        this.logger.error(
          `[SeoService] The set meta description is too long. Recommended length is ${descriptionLimit}. The description will be trimmed.`,
        );
      }
      const descriptionTrim: string =
        description.length > descriptionLimit
          ? description.substring(0, descriptionLimit - 3) + '...'
          : description;
      this._setMetaDescription(autoTrim ? descriptionTrim : description);
    }

    // Set meta image
    const host: string = this.document.location.origin;
    if (imagePath) {
      this._setMetaImage(imagePathIsAbsolute ? imagePath : `${host}/${imagePath}`);
    }
  }

  // Set all meta titles
  private _setMetaTitle(title: string): void {
    this.metaTitle.setTitle(title);
    this.metaTags.updateTag({ property: 'og:title', content: title });
    this.metaTags.updateTag({ name: 'twitter:title', content: title });
  }

  // Set all meta descriptions
  private _setMetaDescription(description: string): void {
    this.metaTags.updateTag({ name: 'description', content: description });
    this.metaTags.updateTag({ property: 'og:description', content: description });
    this.metaTags.updateTag({ name: 'twitter:description', content: description });
  }

  // Set all meta images
  private _setMetaImage(image: string): void {
    this.metaTags.updateTag({ property: 'og:image', content: image });
    this.metaTags.updateTag({ name: 'twitter:image', content: image });
  }

  // Set the canonical link, og:url and og:type for the current route
  private _setCanonical(url: string): void {
    const base: string = (this.libraryConfig?.baseUrl || this.document.location.origin).replace(
      /\/+$/,
      '',
    );
    const parsed: URL = new URL(url, base);
    const path: string = parsed.pathname.replace(/\/+$/, '') || '/';

    const params: URLSearchParams = new URLSearchParams();
    for (const key of this.libraryConfig?.indexedParams ?? []) {
      const value: string | null = parsed.searchParams.get(key);
      if (value) params.set(key, value);
    }

    const query: string = params.toString();
    const canonical: string = `${base}${path}${query ? `?${query}` : ''}`;

    this._setCanonicalLink(canonical);
    this.metaTags.updateTag({ property: 'og:url', content: canonical });
    this.metaTags.updateTag({ property: 'og:type', content: this._getOgType() });
  }

  // The deepest route that declares data.ogType wins, so a lazy parent can set it for its children
  private _getOgType(): string {
    let route: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let ogType: string = 'website';

    while (route) {
      if (route.data?.['ogType']) ogType = route.data['ogType'];
      route = route.firstChild;
    }

    return ogType;
  }

  private _setCanonicalLink(href: string): void {
    let link: HTMLLinkElement | null = this.document.head.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', href);
  }
}
