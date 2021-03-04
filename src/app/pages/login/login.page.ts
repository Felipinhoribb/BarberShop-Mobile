import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { NavController } from '@ionic/angular'

import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public logMenu: boolean = false;

  loginForm: FormGroup;

  constructor(private authentication: AuthenticationService,
    private router: Router,
    private alert: AlertController,
    private formBuilder: FormBuilder,
    private nav: NavController) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(15)])]
    });
  }

  //Método chamado para reiniciar o ciclo de vida
  ionViewWillEnter() {
    this.authentication.mostrarMenu.emit(false);
    this.authentication.signOut().then(() => {
      this.authentication.setUserLog(false);
    }).catch((erro) => {
      console.log("Erro Logout: " + erro)
    })
  }

  login() {

    const dataFormLog = this.loginForm.value

    this.authentication.signIn(dataFormLog.email, dataFormLog.password).then((data) => {

      this.authentication.setUserLog(true);
      this.logMenu = true;

      this.router.navigate(['/list']);

    }).catch((erro) => {
      if (this.loginForm.invalid || this.loginForm.pending) {
        return;
      } else {
        console.log('Erro ao realizar Login: ' + erro);
        //this.SignInFailed();
      }
    });
  }

  logout() {
    return this.authentication.signOut();
  }

  /*async SignInFailed() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Login',
      message: 'O email ou a senha informados estão incorretos!',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm: blah');
          }
        }
      ]
    });

    await alert.present();
  }*/

  showMenu() {
    return this.logMenu;
  }

}
