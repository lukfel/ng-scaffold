import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { LibraryConfig } from './models';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

@NgModule({
  declarations: [
    ScaffoldComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ScaffoldComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent
  ]
})
export class ScaffoldModule {
  public static forRoot(config?: LibraryConfig): ModuleWithProviders<ScaffoldModule> {
    return {
      ngModule: ScaffoldModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config
        }]
    }
  }
}
