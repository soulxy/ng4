import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { JsonPComponent } from './json-p.component';
import { CodeTreeComponent } from './code-tree/code-tree.component';


@NgModule({
  declarations: [
    AppComponent,
    JsonPComponent,
    CodeTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModuleModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
