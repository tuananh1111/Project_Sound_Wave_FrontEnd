import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HostComponent} from './host/host.component';
import {AuthGuard} from './helper/auth-guard';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListSongComponent} from './component/song/list-song/list-song.component';
import {CreateSongComponent} from './component/song/create-song/create-song.component';


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
    component: CreateSongComponent
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
