import { Inject, Injectable, Optional } from '@angular/core';
import { CONFIG } from '../components.module';
import { LibraryConfig } from '../models';

@Injectable({ providedIn: 'root' })
export class Logger {

  constructor(@Optional() @Inject(CONFIG) private config?: LibraryConfig) { }

  public log(message: any): void {
    if (this.config && this.config.production === false) {
      const currentTime = new Date().toLocaleTimeString();
      console.log(currentTime + ': ' + JSON.stringify(message)); // eslint-disable-line no-console
    }
  }

  public error(message: any): void {
    if (this.config && this.config.production === false) {
      const currentTime = new Date().toLocaleTimeString();
      console.error(currentTime + ': ' + JSON.stringify(message)); // eslint-disable-line no-console
    }
  }

}
