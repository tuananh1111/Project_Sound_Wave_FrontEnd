import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { SearchSongComponent } from './search-song/search-song.component';
import {SongRoutingModule} from "./song-routing.module";



@NgModule({
  declarations: [SearchSongComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    SongRoutingModule
  ]
})
export class SongModule { }
