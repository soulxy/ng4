import { Component, OnInit } from '@angular/core';

import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  message: string

  constructor(public authService: AuthService, 
    public router: Router) { }

  ngOnInit() {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'trying to log in...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? ( this.authService.redirectUrl == 'auth/login' ? '/home' : this.authService.redirectUrl) : '/home';
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
