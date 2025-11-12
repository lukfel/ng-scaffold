import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[lfListItemSubtitle]'
})
export class ListItemSubtitleDirective {
    public templateRef = inject(TemplateRef<any>);
}