import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsonPComponent } from './json-p.component';
import { CodeTreeComponent } from './code-tree/code-tree.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RootComponent } from './root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    JsonPComponent,
    CodeTreeComponent,
    HomeComponent,
    PageNotFoundComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModuleModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
