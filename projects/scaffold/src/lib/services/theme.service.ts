
import { Injectable, DOCUMENT, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storageService = inject(LocalStorageService);
  private document = inject<Document>(DOCUMENT);


  private readonly THEME_KEY: string = 'THEME';

  private _currentTheme$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get currentTheme$(): Observable<string> {
    return this._currentTheme$.asObservable();
  }

  constructor() {
              this.loadTheme();
  }

  /**
   * Set one of the defined themes by passing its class name
   *
   * @param newTheme class name of the theme (pass empty string for default theme)
   * @param useLocalStorage persist the current theme in the LocalStorage
   */
  public setTheme(newTheme: string, useLocalStorage?: boolean): void {
    const currentTheme: string = this._currentTheme$.value;

    if (newTheme === currentTheme) {
      return;
    }

    if (currentTheme) {
      this.document.body.classList.remove(currentTheme);
    }

    this._currentTheme$.next(newTheme);

    if (newTheme) {
      this.document.body.classList.add(newTheme);

      if (useLocalStorage) {
        this.storageService.setItem(this.THEME_KEY, JSON.stringify(newTheme));
      }
    } else {
      if (useLocalStorage) {
        this.storageService.removeItem(this.THEME_KEY);
      }
    }
  }

  /**
   * Loads the current theme stored in the local storage if available
   *
   */
  private loadTheme(): void {
    const theme: string | null = this.storageService.getItem(this.THEME_KEY);

    if (!theme) {
      return;
    }

    this.setTheme(theme.replace(/"/g, ''));
  }
}
