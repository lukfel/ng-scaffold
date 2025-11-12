import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[lfListItemTitle]'
})
export class ListItemTitleDirective {
    public templateRef = inject(TemplateRef<any>);
}