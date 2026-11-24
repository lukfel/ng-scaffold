import { Type } from '@angular/core';
import { SeoLibraryConfig } from './seo-config.model';
import { LogReporter, ServerLoggerOptions } from './server-logging.model';
import { TranslationConfig } from './translation-config.model';

export interface ScaffoldLibraryConfig {
  production?: boolean;
  debugging?: boolean;
  language?: TranslationConfig;
  ssrBreakpoints?: boolean;
  seo?: SeoLibraryConfig;
  serverLoggingUrl?: string;
  serverLogger?: Type<LogReporter>;
  serverLoggerOptions?: ServerLoggerOptions;
}
