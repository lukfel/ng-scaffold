import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[lfListItemButtons]'
})
export class ListItemButtonsDirective {
    public templateRef = inject(TemplateRef<any>);
}