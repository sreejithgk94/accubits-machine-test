import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  isUserAuthenticated: boolean;
  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  canActivate(): boolean{
    this.authentication.currentMessage.subscribe(auth => {
      this.isUserAuthenticated = auth;
    });
    if (!this.isUserAuthenticated) {
      this.router.navigate(['/error']);
      return false;
    }
    return true;
  }
}
