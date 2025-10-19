import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadComponent, ListComponent, PlaceholderComponent } from '@lukfel/ng-scaffold';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    PlaceholderComponent,
    FileUploadComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
