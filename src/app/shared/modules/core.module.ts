import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

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
export class CoreModule { }
