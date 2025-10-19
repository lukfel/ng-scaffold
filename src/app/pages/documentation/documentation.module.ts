import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ]
})
export class DocumentationModule { }
