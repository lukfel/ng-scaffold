import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';


@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class TypographyModule { }
