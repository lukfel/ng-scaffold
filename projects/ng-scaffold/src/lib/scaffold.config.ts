import { MediaMatcher } from '@angular/cdk/layout';
import {
  EnvironmentProviders,
  ErrorHandler,
  InjectionToken,
  Provider,
  Type,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
} from '@angular/core';
import { LogReporter, ScaffoldLibraryConfig } from './models';
import { ScaffoldMediaMatcher } from './services/media-matcher.service';
import { SEO_LIBRARY_CONFIG, SeoService } from './services/seo.service';
import {
  LOG_REPORTER,
  ScaffoldErrorHandler,
  UrlLogReporter,
} from './services/server-logging.service';

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

  // The class wins over the url, it is the one that can do more
  if (config.serverLogger && config.serverLoggingUrl && config.production === false) {
    // eslint-disable-next-line no-console
    console.warn('[Scaffold - ServerLogging] serverLogger is used, serverLoggingUrl is ignored');
  }
  const reporter: Type<LogReporter> | null =
    config.serverLogger ?? (config.serverLoggingUrl ? UrlLogReporter : null);
  if (reporter) {
    providers.push(
      { provide: LOG_REPORTER, useClass: reporter },
      { provide: ErrorHandler, useClass: ScaffoldErrorHandler },
    );
  }

  return makeEnvironmentProviders(providers);
}
