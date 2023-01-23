import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MaterialModule,
    HttpClientModule
  ],
  exports: [
    // MaterialModule,
    // HttpClientModule
  ]
})
export class SharedModule { }
