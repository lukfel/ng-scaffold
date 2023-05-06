import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule { }
