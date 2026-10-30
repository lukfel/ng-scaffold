import { SeoLibraryConfig } from './seo-config.model';
import { TranslationConfig } from './translation-config.model';

export interface ScaffoldLibraryConfig {
  production?: boolean;
  debugging?: boolean;
  language?: TranslationConfig;
  ssrBreakpoints?: boolean;
  seo?: SeoLibraryConfig;
}
