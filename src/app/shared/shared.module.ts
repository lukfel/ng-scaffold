import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule
  ],
  exports: [
    CoreModule
  ]
})
export class SharedModule { }
