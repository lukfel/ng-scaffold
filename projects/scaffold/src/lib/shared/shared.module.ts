import { NgModule } from '@angular/core';
import { IconModule } from './components/icon/icon.module';
import { PlaceholderModule } from './components/placeholder/placeholder.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    IconModule,
    PlaceholderModule
  ],
  exports: [
    MaterialModule,
    IconModule,
    PlaceholderModule
  ]
})
export class SharedModule { }
