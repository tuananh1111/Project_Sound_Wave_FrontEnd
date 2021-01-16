import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {LoginComponent} from './visiter/login/login.component';
import {CreateNewSongComponent} from './component/song/create-new-song/create-new-song.component';
import {ListSongComponent} from './component/song/list-song/list-song.component';
import {RegisterComponent} from './visiter/register/register.component';
import {UpdateUserComponent} from './client/user/update-user/update-user.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: 'host',
    component: HostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
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
    path: 'profile/update',
    component: UpdateUserComponent
  },
  {
    path: 'songs/create',
    component: CreateNewSongComponent
  },
  {
    path: 'songs',
    component: ListSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
