import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { SharedModule } from './shared/shared.module';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { RouterService } from './services/router.service';
import { LibraryConfig } from './models/library-config.model';
import { BreakpointService } from './services/breakpoint.service';
import { SnackbarService } from './services/snackbar.service';
import { DialogService } from './services/dialog.service';
import { Logger } from './services/logger.service';

export const CONFIG = new InjectionToken<LibraryConfig>('config');

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ToTopButtonComponent,
    LoadingOverlayComponent
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
