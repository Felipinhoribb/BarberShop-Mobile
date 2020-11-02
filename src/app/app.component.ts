import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HomePage } from './pages/home/home.page'
import { ListPage } from './pages/list/list.page'
import { MessengerPage } from './pages/messenger/messenger.page'
import { SingleImageViewPage } from './pages/single-image-view/single-image-view.page'
import { LoginPage } from './pages/login/login.page'
import { ServicesPage } from './pages/services/services.page'
import { ContactPage } from './pages/contact/contact.page'
import { BarbersPage } from './pages/barbers/barbers.page'
  import { from } from 'rxjs';
import { AppointmentPage } from './pages/appointment/appointment.page';
import { AuthGuardService } from './guards/auth-guard.service';
import { DashboardPage } from './pages/dashboard/dashboard.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      component: HomePage,
      url: '/home',
      icon: 'home'
    },

    /*{
      title: 'Perfil',
      component: HomePage,
      url: '/home',
      icon: 'contact'
    },*/

    {
      title: 'Login',
      component: LoginPage,
      url: '/login',
      icon: 'ios-contact'
    },

    {
      title: 'Sobre nós',
      component: SingleImageViewPage,
      url: '/about',
      icon: 'list-box'
    },

    {
      title: 'Serviços',
      component: ServicesPage,
      url: '/services',
      icon: 'ios-bowtie'
    },

    {
      title: 'Barbeiros',
      component: BarbersPage,
      url: '/barbers',
      icon: 'ios-bowtie' 
    },

    {
      title: 'Agendamentos',
      component: ListPage,
      url: '/list',
      icon: 'checkmark-circle',
    },

    {
      title: 'Relatórios',
      component: DashboardPage,
      url: '/dashboard',
      icon: 'stats'
    },

    {
      title: 'Mensagens',
      component: MessengerPage,
      url: '/messenger',
      icon: 'chatboxes'
    },

    {
      title: 'Contato',
      component: ContactPage,
      url: '/contact',
      icon: 'ios-at'
    },

    {
      title: 'Sair',
      url: '/login',
      icon: 'close-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
