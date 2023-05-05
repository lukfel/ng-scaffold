import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { PlaceholderComponent } from './placeholder.component';

@NgModule({
  declarations: [
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    PlaceholderComponent
  ]
})
export class PlaceholderModule { }
