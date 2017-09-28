import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material.module';
import { FormsModule }   from '@angular/forms';
import { MaterialRoutingModule } from './material-routing.module';

import { MaterialComponent }  from './material.component';
import { FormComponent } from './form/form.component';
// import { HomeComponent }  from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MyOwnCustomMaterialModuleModule,
    FormsModule,
    MaterialRoutingModule
  ],
  declarations: [
  	MaterialComponent,
  	FormComponent,
  	// HomeComponent
  ]
})
export class MaterialModule { }
