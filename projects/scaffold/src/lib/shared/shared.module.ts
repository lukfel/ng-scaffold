import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/icon/icon.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    IconComponent
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
    IconComponent
  ]
})
export class SharedModule { }
