import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';

import {LoginComponent} from './visiter/login/login.component';

import {ListSongComponent} from './component/song/list-song/list-song.component';
import {UpdateUserComponent} from './client/user/update-user/update-user.component';
import {AppComponent} from './app.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {CreateNewSongComponent} from './component/song/create-new-song/create-new-song.component';
import {MySongComponent} from "./client/user/my-song/my-song.component";

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
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  {
    path: 'profile/update',
    component: UpdateUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/create',
    component: CreateNewSongComponent
  },
  {
    path: 'songs/my-songs/:id',
    component: MySongComponent
  },
  {
    path: 'songs',
    component: ListSongComponent,
    // children: [
    //   {
    //     path: "my-songs/:id",
    //     component: MySongComponent
    //   }
    // ]
  },
  {
    path: '',
    component: ListSongComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
// @ts-ignore
