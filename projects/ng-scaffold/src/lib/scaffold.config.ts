import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { ScaffoldLibraryConfig } from './models';

export const CONFIG = new InjectionToken<ScaffoldLibraryConfig>('config');

export function provideScaffold(config: ScaffoldLibraryConfig = {}): EnvironmentProviders {
    return makeEnvironmentProviders([
        { provide: CONFIG, useValue: config }
    ]);
}