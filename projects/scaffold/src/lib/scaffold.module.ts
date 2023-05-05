import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentTitleCardComponent } from './components/content-title-card/content-title-card.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { LibraryConfig } from './models';
import { ConfirmDialogComponent } from './shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

@NgModule({
  declarations: [
    ScaffoldComponent,
    LoadingOverlayComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    FloatingButtonComponent,
    ConfirmDialogComponent
  ],
  imports: [
    RouterModule,
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
