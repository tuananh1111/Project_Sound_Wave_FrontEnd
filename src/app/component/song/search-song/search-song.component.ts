import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ISong} from "../../../model/song/ISong";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-search-song',
  templateUrl: './search-song.component.html',
  styleUrls: ['./search-song.component.css']
})
export class SearchSongComponent implements OnInit {
  songs: ISong[] = [];
  // @ts-ignore
  song: ISong;
  name = '';

  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.name = param.get('name');
      this.getAllSongSearch(this.name);
    })
  }

  getAllSongSearch(name: any) {
    this.songService.searchSong(name).subscribe((data: any) => {
      this.songs = data;
    });
  }

  playThisSong(id: any) {
    this.songService.countViews(id).subscribe(() => console.log('ok'));
    this.songService.getSongById(id).subscribe(value => {
      this.song = value;
      localStorage.setItem('songSelected', JSON.stringify(this.song));
      console.log(this.song);
      window.location.reload();
    });
  }

}
