import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private afa: AngularFireAuth,
    private afs: AngularFirestore) { }

  async createAccount(user: User) {
    try {

      delete user.idUser;
      const newUser = await this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);

      delete user.password;

      await this.afs.collection('Users').doc(newUser.user.uid).set(user);
      console.log('cadastrado com sucesso');
    } catch (error) {
      console.error(error);
    }
  }
}
