import { TodoModalComponent } from './pages/todo-modal/todo-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePage } from './pages/home/home.page'
import { ListPage } from './pages/list/list.page'
import { MessengerPage } from './pages/messenger/messenger.page'
import { SingleImageViewPage } from './pages/single-image-view/single-image-view.page'
import { LoginPage } from './pages/login/login.page'
import { ServicesPage } from './pages/services/services.page'
import { ContactPage } from './pages/contact/contact.page'
import { BarbersPage } from './pages/barbers/barbers.page'
import { DetailsPage } from './pages/details/details.page'
import { RegisterPage } from './pages/register/register.page'
import { AppointmentPage } from './pages/appointment/appointment.page'

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ListPage,
    MessengerPage,
    SingleImageViewPage,
    LoginPage,
    ServicesPage,
    ContactPage,
    BarbersPage,
    DetailsPage,
    RegisterPage,
    AppointmentPage
  ],

  entryComponents: [ 
    AppComponent,
    HomePage,
    ListPage,
    MessengerPage,
    SingleImageViewPage,
    LoginPage,
    ServicesPage,
    ContactPage,
    BarbersPage,
    DetailsPage,
    RegisterPage,
    AppointmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
