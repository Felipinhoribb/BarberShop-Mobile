import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page'
import { ListPage } from './pages/list/list.page'
import { MessengerPage } from './pages/messenger/messenger.page'
import { SingleImageViewPage } from './pages/single-image-view/single-image-view.page'
import { LoginPage } from './pages/login/login.page';
import { ServicesPage } from './pages/services/services.page';
import { ContactPage } from './pages/contact/contact.page';
import { BarbersPage } from './pages/barbers/barbers.page'
import { DetailsPage } from './pages/details/details.page';
import { RegisterPage } from './pages/register/register.page';
import { AppointmentPage } from './pages/appointment/appointment.page'
import { AuthGuardService } from './guards/auth-guard.service';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage},
  { path: 'list', component: ListPage, canActivate: [AuthGuardService]},
  { path: 'messenger', component: MessengerPage, canActivate: [AuthGuardService]},
  { path: 'about', component: SingleImageViewPage},
  { path: 'login', component: LoginPage },
  { path: 'services', component: ServicesPage},
  { path: 'contact', component: ContactPage },
  { path: 'barbers', component: BarbersPage },
  { path: 'details/:id', component: DetailsPage },
  { path: 'register', component: RegisterPage },
  { path: 'appointment/:id', component: AppointmentPage, canActivate: [AuthGuardService]},
  { path: 'dashboard', component: DashboardPage, canActivate: [AuthGuardService]},
  { path: 'profile', component: ProfilePage, /*canActivate: [AuthGuardService]*/ }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
