import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly THEME_KEY: string = 'THEME';

  private _currentTheme$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  get currentTheme$(): Observable<string> {
    return this._currentTheme$.asObservable();
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (localStorage.getItem(this.THEME_KEY)) {
      const theme: string = JSON.parse(localStorage.getItem(this.THEME_KEY) as string)
      this.setTheme(theme);
    }
  }

  public setTheme(newTheme: string, useLocalStorage?: boolean): void {
    const currentTheme: string = this._currentTheme$.value;

    if (newTheme === currentTheme) {
      return;
    }

    if (currentTheme) {
      this.document.body.classList.remove(currentTheme);
    }

    this._currentTheme$.next(newTheme);
    this.document.body.classList.add(newTheme);

    if (useLocalStorage) {
      localStorage.setItem(this.THEME_KEY, JSON.stringify(newTheme));
    }
  }
}
