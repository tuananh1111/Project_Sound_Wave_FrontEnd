import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../service/playlist/playlist.service';
import {Playlist} from '../../../model/playlist';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {SongService} from '../../../service/song/song.service';
import {ISong} from '../../../model/song/ISong';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  playlist: Playlist;
  sub: Subscription;
  songs: ISong[] = [];
  constructor(private service: PlaylistService,
              private activated: ActivatedRoute,
              private songService: SongService) { }

  ngOnInit(): void {
    this.sub = this.activated.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      const id = +paramMap.get('id');
      // @ts-ignore
      this.playlist = this.service.getOnePlaylist(id);
      // this.songs = this.getSongsByPlaylistId(id);
      console.log(this.songs);
    });
  }
  // getSongsByPlaylistId(id: number){
  //   return this.songService.get(id).subscribe();
  // }
}
