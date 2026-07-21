export interface TranslationConfig {
  /**
   * Available locales, e.g. `['de', 'en', 'fr']`. Drives the language picker and
   * the browser-language detection on startup.
   */
  locales: string[];

  /**
   * Locale used when the requested one is unknown or fails to load, and
   * deep-merged under the active locale so keys missing from a partial locale
   * resolve to its text instead of rendering blank, e.g. `'en'`.
   */
  fallbackLocale: string;

  /**
   * Base path the `<locale>.json` files are served from.
   *
   * @default 'assets/i18n/'
   */
  path?: string;

  /**
   * Persist the active locale in the LocalStorage and restore it on startup.
   *
   * @default true
   */
  persist?: boolean;
}
