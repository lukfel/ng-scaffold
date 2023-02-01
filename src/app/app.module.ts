import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScaffoldModule } from '@lf/scaffold';
import { SharedModule } from './shared/shared.module';
import { environment as env } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ScaffoldModule.forRoot( { production: env.production } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
