import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
    selector: '[lfListItemAvatar]'
})
export class ListItemAvatarDirective {
    public templateRef = inject(TemplateRef<any>);
}