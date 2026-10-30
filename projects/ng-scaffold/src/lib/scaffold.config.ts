import { MediaMatcher } from '@angular/cdk/layout';
import {
  EnvironmentProviders,
  InjectionToken,
  Provider,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';
import { ScaffoldLibraryConfig } from './models';
import { ScaffoldMediaMatcher } from './services/media-matcher.service';
import { SEO_LIBRARY_CONFIG, SeoService } from './services/seo.service';

export const CONFIG = new InjectionToken<ScaffoldLibraryConfig>('config');

export function provideScaffold(config: ScaffoldLibraryConfig = {}): EnvironmentProviders {
  const providers: (Provider | EnvironmentProviders)[] = [{ provide: CONFIG, useValue: config }];

  // Opt in, because it makes the SSR response depend on the request and therefore on Vary
  if (config.ssrBreakpoints) {
    providers.push({ provide: MediaMatcher, useClass: ScaffoldMediaMatcher });
  }

  // Started here so the first navigation is caught, even if the app never injects SeoService
  if (config.seo) {
    providers.push(
      { provide: SEO_LIBRARY_CONFIG, useValue: config.seo },
      provideEnvironmentInitializer(() => inject(SeoService)),
    );
  }

  return makeEnvironmentProviders(providers);
}
