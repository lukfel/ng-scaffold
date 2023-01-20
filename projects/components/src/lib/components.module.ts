import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToTopButtonComponent } from './components/to-top-button/to-top-button.component';
import { SharedModule } from './shared/shared.module';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';

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
  ]
})
export class ComponentsModule { }
