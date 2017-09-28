import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModuleModule } from './my-own-custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { DialogService } from './@common/service/dialog.service';

import { AppComponent } from './app.component';
// import { AuthComponent } from './auth/auth.component';
// import { JsonPComponent } from './json-p.component';
// import { CodeTreeComponent } from './code-tree/code-tree.component';
// import { HomeComponent } from './home/home.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ChartComponent } from './chart/chart.component';
// import { RootComponent } from './root/root.component';
// import { MaterialComponent } from './material/material.component';


@NgModule({
  declarations: [
    AppComponent,
    // AuthComponent,
    // JsonPComponent,
    // CodeTreeComponent,
    // HomeComponent,
    // PageNotFoundComponent,
    // ChartComponent,
    // RootComponent,
    // MaterialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModuleModule,
    FlexLayoutModule
  ],
  providers: [ DialogService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
