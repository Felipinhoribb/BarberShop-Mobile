import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router : Router,
              private authentication : AuthenticationService) { }

  canActivate() : Observable<boolean> | boolean {

    if(this.authentication.isUserLog()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
