import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule, routedComponents } from './auth-routing.module';

import { AuthService } from './auth.service';
import { AuthLoginGuard, AuthLeafGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
  	...routedComponents
  ],
  providers: [ 
  	AuthService,
  	AuthLoginGuard,
  	AuthLeafGuard ]
})
export class AuthModule { }
