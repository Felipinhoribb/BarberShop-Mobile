import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLog : boolean = false;

  constructor(private fireAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.fireAuth.auth.signOut();
  }

  isUserLog() {
    return this.userLog;
  }

  setUserLog(state: boolean) {
    this.userLog = state;
  }
}
