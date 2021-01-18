import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './visiter/login/login.component';
import {RegisterComponent} from './visiter/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { HostComponent } from './host/host.component';
import {ListSongComponent} from './component/song/list-song/list-song.component';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {UpdateUserComponent} from './client/user/update-user/update-user.component';
import {CreateNewSongComponent} from './component/song/create-new-song/create-new-song.component';
import {ResetpasswordComponent} from './resetpassword/resetpassword.component';
import {MySongComponent} from "./client/user/my-song/my-song.component";
import {PlayComponent} from "./play/play.component";
import {UpdateComponent} from "./component/song/update/update.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HostComponent,
    CreateNewSongComponent,
    ListSongComponent,
    ResetpasswordComponent,
    UpdateUserComponent,
    PlayComponent,
    MySongComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud')
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
