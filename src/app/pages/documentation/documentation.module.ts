import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { marked, Tokens } from 'marked';
import { MarkdownModule, MARKED_OPTIONS, MarkedOptions } from 'ngx-markdown';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new marked.Renderer();

  renderer.heading = ({ tokens, depth }: Tokens.Heading): string => {
    const text = tokens.map(t => t.raw).join('').trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `<h${depth} id="${slug}">${text}</h${depth}>`;
  };

  return { renderer };
}


@NgModule({
  declarations: [
    DocumentationComponent
  ],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    MarkdownModule.forRoot(
      {
        loader: HttpClient,
        markedOptions: {
          provide: MARKED_OPTIONS,
          useFactory: markedOptionsFactory,
        },
        sanitize: SecurityContext.NONE
      }
    )
  ]
})
export class DocumentationModule { }
