import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/service/users.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userForm : FormGroup; 

  constructor(private afa: AngularFireAuth,
              private afs: AngularFirestore,
              private userService: UsersService,
              private router: Router,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      idUser: null,
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(80)])],
      nickname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      celular: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  register() {

    if(this.userForm.invalid || this.userForm.pending) {
      console.log("Formulário com campos incompletos")
      return;
    }

    const formUser = this.userForm.value;

    formUser.birthday = moment(formUser.birthday).format('DD/MM/YYYY');
    this.userService.createAccount(formUser);
    this.router.navigateByUrl('/list');
  }
}
