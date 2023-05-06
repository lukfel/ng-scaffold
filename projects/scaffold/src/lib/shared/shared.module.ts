import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconComponent } from './components/icon/icon.component';
import { InputComponent } from './components/input/input.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    InputComponent,
    IconComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    InputComponent,
    IconComponent,
    PlaceholderComponent
  ]
})
export class SharedModule { }
