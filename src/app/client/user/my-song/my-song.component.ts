import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ISong} from "../../../model/song/ISong";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-my-song',
  templateUrl: './my-song.component.html',
  styleUrls: ['./my-song.component.css']
})
export class MySongComponent implements OnInit {

  songs: ISong[] = [];
  // @ts-ignore
  song: ISong ;
  // @ts-ignore
  id: number;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.id = param.get('id');
      this.getMySongs(this.id);
    })
  }
  // @ts-ignore
  getMySongs(id: number): ISong[] {
    this.songService.getUserSong(id).subscribe(value => this.songs = value );
  }
  playThisSong(id: any) {
    this.songService.getSongById(id).subscribe(value => {
      this.song = value;
      localStorage.setItem('songSelected', JSON.stringify(this.song));
      // console.log(this.song);
      window.location.reload();
    });
  }
}
