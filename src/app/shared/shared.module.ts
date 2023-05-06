import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
