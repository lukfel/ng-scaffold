export type MaterialVersion = 'm3' | 'm2';

export interface Schema {
  /** Which Angular Material theming API to set up in the global styles. */
  materialVersion?: MaterialVersion;
}
