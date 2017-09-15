import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { JsonPComponent } from './json-p.component';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    JsonPComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
