import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from './components/icon/icon.module';
import { InputComponent } from './components/input/input.component';
import { PlaceholderModule } from './components/placeholder/placeholder.module';
import { CoreModule } from './modules/core.module';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MaterialModule,
    IconModule,
    PlaceholderModule
  ],
  exports: [
    CoreModule,
    MaterialModule,
    InputComponent,
    IconModule
  ]
})
export class SharedModule { }
