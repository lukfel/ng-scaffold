import { Inject, Injectable, Optional } from '@angular/core';
import { LibraryConfig } from '../models';
import { CONFIG } from '../scaffold.module';

@Injectable({ providedIn: 'root' })
export class Logger {

  constructor(@Optional() @Inject(CONFIG) private config?: LibraryConfig) { }

  public log(message: string, ...args: any[]): void {     // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.log(message, ...args);                      // eslint-disable-line no-console
    }
  }

  public warn(message: string, ...args: any[]): void {    // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.warn(message, ...args);                     // eslint-disable-line no-console
    }
  }

  public error(message: string, ...args: any[]): void {   // eslint-disable-line @typescript-eslint/no-explicit-any
    if (this.config?.production === false) {
      console.error(message, ...args);                    // eslint-disable-line no-console
    }
  }

}
