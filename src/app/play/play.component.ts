import {Component, Input, OnInit, Output} from '@angular/core';
import {ISong} from '../model/song/ISong';
import {SongService} from '../service/song/song.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

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
  constructor(
    private songService: SongService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.songCurrentObject.value !== null) {
      console.log(this.songCurrentObject.value);
      // @ts-ignore
      this.song = this.songCurrentObject.value;
      // console.log(this.song);
      // }
    }
  }
}

