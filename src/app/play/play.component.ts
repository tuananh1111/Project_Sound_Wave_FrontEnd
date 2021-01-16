import {Component, OnInit} from '@angular/core';
import {ISong} from '../model/song/ISong';
import {SongService} from '../service/song/song.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  // @ts-ignore
  songCurrentObject: BehaviorSubject<ISong> = new BehaviorSubject<ISong>(JSON.parse(localStorage.getItem('songSelected')));
  // @ts-ignore
  song: ISong;
  // @ts-ignore

  constructor(
    private songService: SongService
  ) {
  }

  ngOnInit(): void {
    if (this.songCurrentObject.value !== null) {
      // @ts-ignore
      this.song = this.songCurrentObject.value;
    }
  }
}

