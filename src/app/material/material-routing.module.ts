import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialComponent }  from './material.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{
  path: '', component: MaterialComponent,
  children: [
    { path: '',  redirectTo: 'form', pathMatch: 'full' },
    { path: 'form',  component: FormComponent}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
