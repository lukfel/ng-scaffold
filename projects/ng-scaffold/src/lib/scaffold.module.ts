import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
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
import { CONFIG } from './config/config.token';
import { ScaffoldLibraryConfig } from './models';
import { InputComponent } from './shared/components/input/input.component';

@NgModule({
  declarations: [
    ScaffoldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoadingOverlayComponent,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    FloatingButtonComponent,
    BottomBarComponent,
    InputComponent
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
