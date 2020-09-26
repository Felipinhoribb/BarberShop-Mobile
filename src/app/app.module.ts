import { TodoModalComponent } from './pages/todo-modal/todo-modal.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

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
    BarbersPage
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
    BarbersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
   

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
