import { Injectable } from '@angular/core';
import { CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router, 
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class AuthLoginGuard implements CanLoad,CanActivate, CanActivateChild  {
  constructor(private authService: AuthService,
    private router: Router) {}  

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if(this.authService.isLoggedIn) { return true;}
    this.authService.redirectUrl = url;
    this.router.navigate(['/auth/login']);
    return false;
  }
}

export class AuthLeafGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}