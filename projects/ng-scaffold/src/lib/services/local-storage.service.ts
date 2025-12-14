import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { CONFIG } from '../config/config.token';
import { ScaffoldLibraryConfig } from '../models';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });
  private platformId = inject(PLATFORM_ID);
  private logger = inject(Logger);


  /**
   * Set an item into the browser's local storage
   * 
   * @param key key of the item
   * @param value value of the item
   */
  public setItem<T>(key: string, value: T | null): void {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const stringValue: string = JSON.stringify(value);
      if (this.libraryConfig?.debugging) this.logger.log(`[SET ITEM] ${key} with value:`, stringValue);
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
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const encodedValue: string = btoa(JSON.stringify(value));
      if (this.libraryConfig?.debugging) this.logger.log(`[SET ITEM] ${key} with value:`, encodedValue);
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
    if (!isPlatformBrowser(this.platformId)) return null;

    try {
      const item: string | null = localStorage.getItem(key);
      if (this.libraryConfig?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
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
    if (!isPlatformBrowser(this.platformId)) return null;

    try {
      const item: string | null = localStorage.getItem(key);
      if (this.libraryConfig?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
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
    if (!isPlatformBrowser(this.platformId)) return null;

    try {
      const item: string | null = localStorage.getItem(key);
      if (this.libraryConfig?.debugging) this.logger.log(`[GET ITEM] ${key} with value:`, item);
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
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      if (this.libraryConfig?.debugging) this.logger.log(`[REMOVE ITEM] ${key}`);
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
    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.clear();
  }

  private dateReviver(key: any, value: any): any {     // eslint-disable-line
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)) {
      return new Date(value);
    }
    return value;
  }
}
