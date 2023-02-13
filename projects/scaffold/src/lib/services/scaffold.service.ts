import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScaffoldConfig } from '../models';

@Injectable({ providedIn: 'root' })
export class ScaffoldService {

  // Scaffold Config
  private _scaffoldConfig$: BehaviorSubject<ScaffoldConfig> = new BehaviorSubject<ScaffoldConfig>({});

  public get scaffoldConfig$(): Observable<ScaffoldConfig> {
    return this._scaffoldConfig$;
  }

  public get scaffoldConfig(): ScaffoldConfig {
    return this._scaffoldConfig$.value;
  }

  public set scaffoldConfig(value: ScaffoldConfig) {
    this._scaffoldConfig$.next(value);
  }

  // Header Input
  private _headerInputValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get headerInputValue$(): Observable<string> {
    return this._headerInputValue$;
  }

  public get headerInputValue(): string {
    return this._headerInputValue$.value;
  }

  public set headerInputValue(value: string) {
    this._headerInputValue$.next(value);
  }

  // constructor(@Optional() @Inject(CONFIG) private config?: LibraryConfig) { }


}
