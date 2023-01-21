import { Inject, Injectable } from '@angular/core';
import { CONFIG } from '../components.module';
import { LibraryConfig } from '../models/library-config.model';

@Injectable({ providedIn: 'root' })
export class Logger {

  constructor(@Inject(CONFIG) private config: LibraryConfig) {
    config.production
  }

  public log(message: any): void {
    if (!this.config?.production) {
      const currentTime = new Date().toLocaleTimeString();
      console.log(currentTime + ': ' + JSON.stringify(message)); // eslint-disable-line no-console
    }
  }

  public error(message: any): void {
    if (!this.config?.production) {
      const currentTime = new Date().toLocaleTimeString();
      console.error(currentTime + ': ' + JSON.stringify(message)); // eslint-disable-line no-console
    }
  }

}
