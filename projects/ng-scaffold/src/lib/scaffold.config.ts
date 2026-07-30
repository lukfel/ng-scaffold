import { MediaMatcher } from '@angular/cdk/layout';
import {
  EnvironmentProviders,
  InjectionToken,
  Provider,
  makeEnvironmentProviders,
} from '@angular/core';
import { ScaffoldLibraryConfig } from './models';
import { ScaffoldMediaMatcher } from './services/media-matcher.service';

export const CONFIG = new InjectionToken<ScaffoldLibraryConfig>('config');

export function provideScaffold(config: ScaffoldLibraryConfig = {}): EnvironmentProviders {
  const providers: Provider[] = [{ provide: CONFIG, useValue: config }];

  // Opt in, because it makes the SSR response depend on the request and therefore on Vary
  if (config.ssrBreakpoints) {
    providers.push({ provide: MediaMatcher, useClass: ScaffoldMediaMatcher });
  }

  return makeEnvironmentProviders(providers);
}
