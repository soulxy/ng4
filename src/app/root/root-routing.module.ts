import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent }    from './root.component';
import { HomeComponent }  from '../home/home.component';
// import { MaterialComponent }  from '../material/material.component';

import { AuthLoginGuard, AuthLeafGuard } from '../auth/auth.guard';

const routes: Routes = [{
  path: '', component: RootComponent,
  children: [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent, canDeactivate: [AuthLeafGuard]},
    { path: 'material',  loadChildren: 'app/material/material.module#MaterialModule', data: { preload: true } },
    { path: 'chart',  loadChildren: 'app/chart/chart.module#ChartModule', canActivate: [AuthLoginGuard], canLoad: [AuthLoginGuard]},
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RootRoutingModule { }