import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartpageRoutingModule } from './startpage-routing.module';
import { StartpageComponent } from './startpage.component';


@NgModule({
  declarations: [
    StartpageComponent
  ],
  imports: [
    CommonModule,
    StartpageRoutingModule
  ]
})
export class StartpageModule { }
