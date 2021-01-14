import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './visiter/login/login.component';
import {RegisterComponent} from './visiter/register/register.component';
import {UpdateComponent} from './client/song/update/update.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
