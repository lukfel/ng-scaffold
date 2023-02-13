import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { ContentTitleCardComponent } from './components/content-title-card/content-title-card.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScaffoldComponent } from './components/scaffold/scaffold.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { LibraryConfig } from './models';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

// @Injectable()
// export class CustomHammerConfig extends HammerGestureConfig {
//   public override overrides = {
//     pinch: { enable: false },
//     rotate: { enable: false }
//   };
// }

@NgModule({
  declarations: [
    ScaffoldComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent
  ],
  imports: [
    SharedModule,
    HammerModule
  ],
  exports: [
    ScaffoldComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
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
        { provide: CONFIG, useValue: config },
        // { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig },
      ]
    }
  }
}
