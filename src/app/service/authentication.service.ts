import { Injectable, EventEmitter } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLog : boolean = false;
  public mostrarMenu = new EventEmitter<boolean>();


  constructor(private fireAuth: AngularFireAuth) { }

  signIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(()=>{
      this.mostrarMenu.emit(true);
    })
  }

  signOut() {
    return this.fireAuth.auth.signOut().then(()=>{
      this.mostrarMenu.emit(false);
    });
  }

  isUserLog() {
    return this.userLog;
  }

  setUserLog(state: boolean) {
    this.userLog = state;
  }
}
