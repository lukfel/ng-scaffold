import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaceholderComponent } from '@lukfel/scaffold';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule,
    PlaceholderComponent
  ]
})
export class NotFoundModule { }
