import {Component, OnInit} from '@angular/core';
import {ISong} from '../../../model/song/ISong';
import {SongService} from '../../../service/song/song.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})
export class ListSongComponent implements OnInit {
  songs: ISong[] = [];
  song: ISong;
  sub: Subscription;
  id: number;
  constructor(private songService: SongService,
              private activated: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getAllSong();
    this.sub = this.activated.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });

  }

  getAllSong() {
    this.songService.getAllSong().subscribe((data: any) => {
      this.songs = data;
      console.log(this.songs);
    });
  }
  getSongById(id: any){
    this.songService.getSongById(id).subscribe(value =>
    {this.song = value,
      console.log(this.song); }
      ,
      error => {alert('Not found'); }
      );
  }

  // delete(){
  //   success => this.getAllSong();
  // }

}
