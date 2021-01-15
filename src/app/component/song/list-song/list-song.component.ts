import {Component, OnInit} from '@angular/core';
import {ISong} from '../../../model/song/ISong';
import {SongService} from '../../../service/song/song.service';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {
  songs: ISong[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit(): void {
    this.getAllSong();
  }

  getAllSong() {
    this.songService.getAllSong().subscribe((data: any) => {
      this.songs = data;
      console.log(this.songs);
    });
  }

  // delete(){
  //   success => this.getAllSong();
  // }

}
