import { InjectionToken } from '@angular/core';
import { ScaffoldLibraryConfig } from '../models';

export const CONFIG = new InjectionToken<ScaffoldLibraryConfig>('config');