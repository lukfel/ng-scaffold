export interface SeoConfig {
  metaPageTitle?: string;
  metaPageDescription?: string;
  metaImagePath?: string;
  metaImagePathIsAbsolute?: boolean;
  autoTrim?: boolean;
}

// App-wide settings for the canonical link, og:url and og:type, passed to provideScaffold
export interface SeoLibraryConfig {
  // Public origin such as https://www.example.com; falls back to the document's origin
  baseUrl?: string;
  // Query params that identify distinct indexable pages; every other param is dropped
  indexedParams?: string[];
}
