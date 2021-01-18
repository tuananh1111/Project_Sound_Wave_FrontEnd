import {Component, Input, OnInit, Output} from '@angular/core';
import {ISong} from '../../../model/song/ISong';
import {SongService} from '../../../service/song/song.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {
  songs: ISong[] = [];
 // @ts-ignore
  song: ISong;

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getAllSong();
  }

  getAllSong() {
    this.songService.getAllSong().subscribe((data: any) => {
      this.songs = data;
    });
  }

  playThisSong(id: any) {
    this.songService.countViews(id).subscribe(() => console.log("ok"));
    this.songService.getSongById(id).subscribe(value => {
      this.song = value;
      localStorage.setItem('songSelected', JSON.stringify(this.song));
      console.log(this.song);
      window.location.reload();
    });
  }

  // delete(){
  //   success => this.getAllSong();
  // }

}
