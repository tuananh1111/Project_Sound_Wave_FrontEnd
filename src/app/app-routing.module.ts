import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './component/visiter/login/login.component';
import {RegisterComponent} from './component/visiter/register/register.component';
import {UpdateComponent} from './component/client/song/update/update.component';
import {ProfileComponent} from './component/client/user/profile/profile.component';

const routes: Routes = [
  {
    path: 'host',
    component: HostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'song/:id',
    component: UpdateComponent
  },
  {
    path: 'user/:id',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
