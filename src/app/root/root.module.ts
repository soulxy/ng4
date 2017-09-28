import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material.module';

import { FormsModule }   from '@angular/forms';
import { RootComponent }   from './root.component';
import { RootRoutingModule }   from './root-routing.module';
import { HomeModule }   from '../home/home.module';
// import { MaterialComponent }   from '../material/material.component';

@NgModule({
  imports: [
    CommonModule,
    MyOwnCustomMaterialModuleModule,
    FormsModule,
    RootRoutingModule,
    HomeModule
  ],
  declarations: [
    RootComponent
    // MaterialComponent
  ],
  providers: [ ]
})
export class RootModule {}