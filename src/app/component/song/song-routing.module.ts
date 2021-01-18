import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SongModule} from "./song.module";
import {Router, RouterModule, Routes} from "@angular/router";
import {SearchSongComponent} from "./search-song/search-song.component";

const routes: Routes = [
  {
    path:'/:name',
    component: SearchSongComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongRoutingModule { }
