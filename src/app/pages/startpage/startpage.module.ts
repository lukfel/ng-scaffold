import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartpageRoutingModule } from './startpage-routing.module';
import { StartpageComponent } from './startpage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BottomBarModule } from 'projects/scaffold/src/lib/shared/components/bottom-bar/bottom-bar.module';


@NgModule({
  declarations: [
    StartpageComponent
  ],
  imports: [
    CommonModule,
    StartpageRoutingModule,
    SharedModule,
    BottomBarModule
  ]
})
export class StartpageModule { }
