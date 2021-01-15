import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './component/visiter/login/login.component';
import {RegisterComponent} from './component/visiter/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helper/jwt-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { HostComponent } from './host/host.component';
import { ProfileComponent } from './component/client/user/profile/profile.component';
import { UpdateComponent } from './component/client/song/update/update.component';
import { NavBarComponent } from './component/shares/nav-bar/nav-bar.component';
import { SideMenuComponent } from './component/shares/side-menu/side-menu.component';
import { SongPlayerComponent } from './component/shares/song-player/song-player.component';
import { FooterComponent } from './component/shares/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HostComponent,
    ProfileComponent,
    UpdateComponent,
    NavBarComponent,
    SideMenuComponent,
    SongPlayerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgxAudioPlayerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
