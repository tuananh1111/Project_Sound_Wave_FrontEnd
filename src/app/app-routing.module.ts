import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';
import {CreateNewSongComponent} from './component/song/create-new-song/create-new-song.component';

import {LoginComponent} from './visiter/login/login.component';
import {RegisterComponent} from './visiter/register/register.component';
import {ListSongComponent} from './component/song/list-song/list-song.component';

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
    path: 'songs/create',
    component: CreateNewSongComponent
  },
  {
    path: 'songs',
    component: ListSongComponent
  },
  {
    path: 'songs/:id',
    component: ListSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
