import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = ''
  public password: string = ''

  constructor(private authentication: AuthenticationService,
    private router: Router,
    private alert: AlertController) {
    this.authentication.signOut().then(() => {
      this.authentication.setUserLog(false);
    }).catch((erro) => {
      console.log("Erro Logout: " + erro)
    })
  }

  ngOnInit() {
  }

  login() {
    this.authentication.signIn(this.email, this.password).then((data) => {

      this.authentication.setUserLog(true);

      this.router.navigate(['/list']);
    }).catch((erro) => {
      if (this.email == '' && this.password == '') {
        this.isEmpty();
      } else {
        console.log('Erro ao realizar Login: ' + erro);
        this.SignInFailed();
      }
    });
  }

  logout() {
    return this.authentication.signOut();
  }

  async SignInFailed() {
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
  }

  async isEmpty() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Login',
      message: 'Os campos Login e Senha devem ser preenchidos!',
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
  }

}
