export interface LogEntry {
  tag: string;
  name?: string;
  code?: string;
  message?: string;
  stack?: string;
  path: string;
  timestamp: string;
}

export interface LogReporter {
  report(entries: LogEntry[]): Promise<void>;
}

export interface ServerLoggerOptions {
  batchDelay?: number;
  maxPerSession?: number;
  beforeSend?: (entry: LogEntry, error: unknown) => LogEntry | null;
}
