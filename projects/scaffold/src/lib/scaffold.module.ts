import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ContentTitleCardComponent } from './components/content-title-card/content-title-card.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { ScaffoldLibraryConfig } from './models';
import { ConfirmDialogComponent } from './shared/components/dialogs/confirm-dialog/confirm-dialog.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { InputComponent } from './shared/components/input/input.component';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<ScaffoldLibraryConfig>('config');

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
    ConfirmDialogComponent,
    BottomBarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    InputComponent,
    IconComponent
  ],
  exports: [
    ScaffoldComponent
  ]
})
export class ScaffoldModule {
  public static forRoot(config?: ScaffoldLibraryConfig): ModuleWithProviders<ScaffoldModule> {
    return {
      ngModule: ScaffoldModule,
      providers: [
        { provide: CONFIG, useValue: config }
      ]
    }
  }
}
