import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadComponent, ListComponent, ListItemAvatarDirective, ListItemButtonsDirective, ListItemSubtitleDirective, ListItemTitleDirective, PlaceholderComponent } from '@lukfel/ng-scaffold';
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
    ListComponent,
    ListItemAvatarDirective,
    ListItemTitleDirective,
    ListItemSubtitleDirective,
    ListItemButtonsDirective
  ]
})
export class ComponentsModule { }
