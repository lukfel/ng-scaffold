import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    PlaceholderComponent,
    FileUploadComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
