import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartpageRoutingModule } from './startpage-routing.module';
import { StartpageComponent } from './startpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileUploadComponent } from '@lukfel/ng-scaffold';


@NgModule({
  declarations: [
    StartpageComponent
  ],
  imports: [
    CommonModule,
    StartpageRoutingModule,
    SharedModule,
    FileUploadComponent
  ]
})
export class StartpageModule { }
