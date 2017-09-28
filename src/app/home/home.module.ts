import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material.module';
import { FormsModule }   from '@angular/forms';
import { HomeComponent }   from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MyOwnCustomMaterialModuleModule,
    FormsModule
  ],
  declarations: [
  	HomeComponent
  ]
})
export class HomeModule { }
