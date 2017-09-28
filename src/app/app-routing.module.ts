import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategyService } from './@common/service/selective-preloading-strategy.service';
// import { RootComponent } from './root/root.component';
// import { HomeComponent }   from './home/home.component';
// import { MaterialComponent }   from './material/material.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
// import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent},
  // { path: '', component: RootComponent,
  //   children: [
  //     { path: '',  redirectTo: 'home', pathMatch: 'full'},
  //     { path: 'home',  component: HomeComponent},
  //     { path: 'material',  component: MaterialComponent,
  //     children: [
  //       { path: '',  redirectTo: 'home', pathMatch: 'full'},
  //       { path: 'home',  component: HomeComponent},
  //     ]
  //   },
  //   ] },
  // { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'
    // children: [
    //   { path: '', component: AuthLoginComponent },
    //   { path: 'login', component: AuthLoginComponent },
    //   { path: 'register', component: AuthRegisterComponent },
    //   { path: 'logout', component: AuthLogoutComponent },
    //   // { path: 'request-password', component: AuthRequestPasswordComponent },
    //   { path: 'reset-password', component: AuthResetPasswordComponent },
    // ]
  // },
  { path: '', loadChildren: 'app/root/root.module#RootModule'},
  { path: '**', redirectTo: '/404'}
];
/*
* preloadingStrategy: 预加载策略： 默认完全不预加载或者预加载每个惰性加载模块
*   CanLoad守卫的优先级高于预加载策略
*/
@NgModule({
  imports: [ RouterModule.forRoot(routes, { 
    enableTracing: true,//debugging  url
    preloadingStrategy: SelectivePreloadingStrategyService })],
  exports: [ RouterModule ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    SelectivePreloadingStrategyService
  ]
})
export class AppRoutingModule {}