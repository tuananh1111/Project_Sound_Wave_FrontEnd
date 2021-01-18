import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../service/playlist/playlist.service';
import {Playlist} from '../../../model/playlist';

@Component({
  selector: 'app-list-playlist-hot',
  templateUrl: './list-playlist-hot.component.html',
  styleUrls: ['./list-playlist-hot.component.css']
})
export class ListPlaylistHotComponent implements OnInit {
  playlists: Playlist[] = [];
  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.getPlaylistsHot();
  }
  getPlaylistsHot(){
    this.service.getPlaylistsHot().subscribe(value => {
      console.log(value);
      this.playlists = value;
    });
  }

}
