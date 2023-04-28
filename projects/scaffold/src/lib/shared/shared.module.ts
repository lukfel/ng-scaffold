import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentTitleCardComponent } from './../components/content-title-card/content-title-card.component';
import { DrawerComponent } from './../components/drawer/drawer.component';
import { FloatingButtonComponent } from './../components/floating-button/floating-button.component';
import { FooterComponent } from './../components/footer/footer.component';
import { HeaderComponent } from './../components/header/header.component';
import { LoadingOverlayComponent } from './../components/loading-overlay/loading-overlay.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    FloatingButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent,
    IconComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    NavbarComponent,
    DrawerComponent,
    FooterComponent,
    ContentTitleCardComponent,
    FloatingButtonComponent,
    LoadingOverlayComponent,
    ConfirmDialogComponent,
    IconComponent,
    InputComponent
  ]
})
export class SharedModule { }
