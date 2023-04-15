import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { LibraryConfig } from './models';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

@NgModule({
  declarations: [
    ScaffoldComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ScaffoldComponent
  ]
})
export class ScaffoldModule {
  public static forRoot(config?: LibraryConfig): ModuleWithProviders<ScaffoldModule> {
    return {
      ngModule: ScaffoldModule,
      providers: [
        { provide: CONFIG, useValue: config }
      ]
    }
  }
}
