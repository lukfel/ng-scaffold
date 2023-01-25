import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { LibraryConfig } from './models';
import { BreakpointService, DialogService, Logger, RouterService, SnackbarService } from './services';
import { SharedModule } from './shared/shared.module';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
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
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
    DrawerComponent,
    FooterComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent
  ],
  providers: [
    Logger,
    RouterService,
    BreakpointService,
    SnackbarService,
    DialogService
  ]
})
export class ComponentsModule {
  public static forRoot(config: LibraryConfig): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
      providers: [
        {
          provide: CONFIG,
          useValue: config
        }]
    }
  }
}
