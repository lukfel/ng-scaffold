import { Inject, Injectable, Optional } from '@angular/core';
import { LibraryConfig } from '../models';
import { Logger } from './logger.service';
import { CONFIG } from '../scaffold.module';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private logger: Logger,
              @Optional() @Inject(CONFIG) private config?: LibraryConfig) { }

  /**
   * Set an item into the browser's local storage
   * 
   * @param key key of the item
   * @param value value of the item
   */
  public setItem<T>(key: string, value: T | null): void {
    try {
      const stringValue: string = JSON.stringify(value);
      if (this.config?.debugging) this.logger.log(`[SET ITEM] ${key} with value:`, stringValue);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      this.logger.error(`[ERROR SET ITEM] ${key}: ${error}`);
    }
  }

  /**
   * Set an item encoded into the browser's local storage
   * 
   * @param key key of the item
   * @param value value of the item
   */
  public setItemEncoded<T>(key: string, value: T | null): void {
    try {
      const encodedValue: string = btoa(JSON.stringify(value));
      if (this.config?.debugging) this.logger.log(`[SET ITEM] ${key} with value:`, encodedValue);
      localStorage.setItem(key, encodedValue);
    } catch (error) {
      this.logger.error(`[ERROR SET ITEM] ${key}: ${error}`);
    }
  }

  /**
   * Get an item from the browser's local storage by key
   * 
   * @param key key of the item
   * @returns value of the item
   */
  public getItem<T>(key: string): T | null {
    try {
      const item: string | null = localStorage.getItem(key);
      if (this.config?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
      return item ? JSON.parse(item, this.dateReviver) as T : null;
    } catch (error) {
      this.logger.error(`[ERROR GET ITEM] ${key}: ${error}`);
      return null;
    }
  }

  /**
   * Get an item and decode it from the browser's local storage by key
   * 
   * @param key key of the item
   * @returns value of the item
   */
  public getItemDecoded<T>(key: string): T | null {
    try {
      const item: string | null = localStorage.getItem(key);
      if (this.config?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
      return item ? JSON.parse(atob(item), this.dateReviver) as T : null;
    } catch (error) {
      this.logger.error(`[ERROR GET ITEM] ${key}: ${error}`);
      return null;
    }
  }

  /**
   * Get an unparsed string item from the browser's local storage by key
   * 
   * @param key key of the item
   */
  public getItemUnparsed(key: string): string | null {
    try {
      const item: string | null = localStorage.getItem(key);
      if (this.config?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
      return item || null;
    } catch (error) {
      this.logger.error(`[ERROR GET ITEM] ${key}: ${error}`);
      return null;
    }
  }

  /**
   * Remove an item from the browser's local storage by key
   * 
   * @param key key of the item
   * @returns value of the item
   */
  public removeItem(key: string): void {
    try {
      if (this.config?.debugging) this.logger.log(`[REMOVE ITEM] ${key}`);
      localStorage.removeItem(key);
    } catch (error) {
      this.logger.error(`[ERROR REMOVE ITEM] ${key}: ${error}`);
    }
  }

  /**
   * Clear the browser's local storage for this application
   * 
   */
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
