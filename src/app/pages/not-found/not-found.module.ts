import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlaceholderModule } from '@lukfel/scaffold';
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
    PlaceholderModule
  ]
})
export class NotFoundModule { }
