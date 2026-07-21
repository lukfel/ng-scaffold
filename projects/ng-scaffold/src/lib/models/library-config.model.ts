import { TranslationConfig } from './translation-config.model';

export interface ScaffoldLibraryConfig {
  production?: boolean;
  debugging?: boolean;
  language?: TranslationConfig;
}
