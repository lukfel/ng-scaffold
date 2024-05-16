import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { BottomBarComponent } from './bottom-bar.component';

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    BottomBarComponent
  ]
})
export class BottomBarModule { }
