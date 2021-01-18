import { Component, OnInit } from '@angular/core';
import {PlaylistService} from '../../../service/playlist/playlist.service';
import {Playlist} from '../../../model/playlist';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {
  playlists: Playlist[] = [];
  constructor(private service: PlaylistService) { }

  ngOnInit(): void {
    this.getAllPlaylist();
  }
  getAllPlaylist(){
    this.service.getAllPlaylist().subscribe(value => {
      this.playlists = value;
      console.log(this.playlists);
    });
  }

}
