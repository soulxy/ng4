import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthLogoutComponent } from './auth-logout/auth-logout.component';
import { AuthResetPasswordComponent } from './auth-reset-password/auth-reset-password.component';

const routes: Routes = [{ 
  path: 'auth', component: AuthComponent, 
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
      { path: 'logout', component: AuthLogoutComponent },
      // { path: 'request-password', component: AuthRequestPasswordComponent },
      { path: 'reset-password', component: AuthResetPasswordComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const routedComponents = [
  AuthComponent,
  AuthLoginComponent, 
  AuthRegisterComponent,
  AuthLogoutComponent, 
  AuthResetPasswordComponent
];
