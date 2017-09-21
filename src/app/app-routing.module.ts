import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './root/root.component';
import { HomeComponent }   from './home/home.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'home',  component: HomeComponent},
  // { path: 'material',  component: HomeComponent},
  { path: '', component: RootComponent,
    children: [
      { path: '',  redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',  component: HomeComponent},
      { path: 'material2',  component: HomeComponent},
    ] },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}