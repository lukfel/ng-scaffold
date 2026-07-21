/**
 * Recursive shape of a loaded translation JSON file.
 *
 * The library stays intentionally loose here: each consuming app owns its own
 * strongly-typed `TransMap` interface and reads the service through
 * `TranslationService.transMapAs<AppTransMap>()` to keep full type-safety.
 */
export type TransMap = { [key: string]: string | TransMap };
