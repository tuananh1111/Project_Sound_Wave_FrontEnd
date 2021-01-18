import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ISong} from "../../../model/song/ISong";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user/user.service";
import {User} from "../../../model/user";

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
  user: User;
  // @ts-ignore
  id: number;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userFromLocalStorage = this.authService.currentUserValue;
     this.userService.getUserByUsername(userFromLocalStorage.username).subscribe(value => {
      this.user = value;
      // @ts-ignore
       this.getMySongs(this.user.id);
    })
  }
  // @ts-ignore
  getMySongs(id: number): ISong[] {
    this.songService.getMySongs(id).subscribe(value => this.songs = value );
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
