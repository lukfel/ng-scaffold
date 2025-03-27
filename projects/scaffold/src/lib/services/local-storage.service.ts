import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private logger: Logger) { }

  public setItem<T>(key: string, value: T | null): void {
    try {
      this.logger.log(`[SET ITEM] ${key} with value: ${JSON.stringify(value)}`);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      this.logger.error(`[ERROR SET ITEM] ${key}: ${error}`);
    }
  }

  public setItemEncoded<T>(key: string, value: T | null): void {
    try {
      const encodedValue: string = btoa(JSON.stringify(value));
      this.logger.log(`[SET ITEM] ${key} with value: ${encodedValue}`);
      localStorage.setItem(key, encodedValue);
    } catch (error) {
      this.logger.error(`[ERROR SET ITEM] ${key}: ${error}`);
    }
  }

  public getItem<T>(key: string): T | null {
    try {
      this.logger.log(`[GET ITEM] ${key}`);
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item, this.dateReviver) as T : null;
    } catch (error) {
      this.logger.error(`[ERROR GET ITEM] ${key}: ${error}`);
      return null;
    }
  }

  public getDecoded<T>(key: string): T | null {
    try {
      this.logger.log(`[GET ITEM] ${key}`);
      const item = localStorage.getItem(key);
      return item ? JSON.parse(atob(item), this.dateReviver) as T : null;
    } catch (error) {
      this.logger.error(`[ERROR GET ITEM] ${key}: ${error}`);
      return null;
    }
  }

  public removeItem(key: string): void {
    try {
      this.logger.log(`[REMOVE ITEM] ${key}`);
      localStorage.removeItem(key);
    } catch (error) {
      this.logger.error(`[ERROR REMOVE ITEM] ${key}: ${error}`);
    }
  }

  public clear(): void {
    localStorage.clear();
  }

  private dateReviver(key: any, value: any): any {     // eslint-disable-line
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
      return new Date(value);
    }
    return value;
  }

}
