import { ComponentPortal, ComponentType, TemplatePortal } from '@angular/cdk/portal';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScaffoldConfig, ScaffoldLibraryConfig } from '../models';
import { CONFIG } from '../scaffold.module';
import { Logger } from './logger.service';

@Injectable({ providedIn: 'root' })
export class ScaffoldService {

  private libraryConfig = inject<ScaffoldLibraryConfig>(CONFIG, { optional: true });
  private logger = inject(Logger);


  // Scaffold Config
  private _scaffoldConfig$: BehaviorSubject<ScaffoldConfig> = new BehaviorSubject<ScaffoldConfig>({});

  public get scaffoldConfig$(): Observable<ScaffoldConfig> {
    return this._scaffoldConfig$.asObservable();
  }

  public set scaffoldConfig(value: ScaffoldConfig) {
    this._scaffoldConfig$.next(value);
  }

  public get scaffoldConfig(): ScaffoldConfig {
    return this._scaffoldConfig$.value;
  }

  // Header Input Change
  private _headerInputChangeValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get headerInputChangeValue$(): Observable<string> {
    return this._headerInputChangeValue$.asObservable();
  }

  public set headerInputChangeValue(value: string) {
    this._headerInputChangeValue$.next(value);
  }

  // Button Click Event
  private _buttonClickEventValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get buttonClickEventValue$(): Observable<string> {
    return this._buttonClickEventValue$.asObservable();
  }

  public set buttonClickEventValue(value: string) {
    this._buttonClickEventValue$.next(value);
    this._buttonClickEventValue$.next('');
  }

  // Drawer component
  private _drawerPortal$ = new BehaviorSubject<ComponentPortal<unknown> | TemplatePortal<unknown> | null>(null);

  public get drawerPortal$(): Observable<ComponentPortal<unknown> | TemplatePortal<unknown> | null> {
    return this._drawerPortal$.asObservable();
  }

  public set drawerPortal(value: ComponentType<unknown>) {
    const componentPortal: ComponentPortal<unknown> = new ComponentPortal(value);
    this._drawerPortal$.next(value ? componentPortal : null);
  }

  // Update a specific property in the ScaffoldConfig
  public updateScaffoldProperty(property: keyof ScaffoldConfig, value: unknown): void {
    const currentState: ScaffoldConfig = this._scaffoldConfig$.getValue();

    if (currentState[property] === value) {
      return;
    }

    const updatedState = { ...currentState, [property]: value };
    if (this.libraryConfig?.debugging) this.logger.log(`[UPDATE] ScaffoldConfig.${property}`, value);

    this._scaffoldConfig$.next(updatedState);
  }
}
