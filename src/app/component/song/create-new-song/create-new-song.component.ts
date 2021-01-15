import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {ISong} from "../../../model/song/ISong";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user/user.service";
import {UserToken} from "../../../model/user-token";
import {IUser} from "../../../model/IUser";
import {SongService} from "../../../service/song/song.service";
import {SingerService} from "../../../service/singer/singer.service";
import {ISinger} from "../../../model/singer/ISinger";

@Component({
  selector: 'app-create-new-song',
  templateUrl: './create-new-song.component.html',
  styleUrls: ['./create-new-song.component.css']
})
export class CreateNewSongComponent implements OnInit {
  name = '';
  description = '';
  urlMp3 = '';
  avatar = '';
  musician = '';
  views = 200;
  // @ts-ignore
  userCurrent: UserToken;
  // @ts-ignore
  user: IUser;
  title = "cloudsSorage";
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  singers: ISinger[] = [];
  constructor(
    private storage: AngularFireStorage,
    private fbd: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private songService: SongService,
    private singerService: SingerService
  ) {
    this.getAllSinger();
  }
  songForm: FormGroup = this.fbd.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    musician: new FormControl('', Validators.required),
    views: new FormControl('', Validators.required),
    singer: new FormControl('', Validators.required),
  });
  // tslint:disable-next-line:typedef
    ngOnInit() {

  }
  // @ts-ignore
  saveUrlMp3(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe( finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.urlMp3 = url;
            }
            console.log(this.fb);
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }
  // @ts-ignore
  saveAvatar(event) {
    let n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe( finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.avatar = url;
            }
            console.log(this.fb);
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }
  async setNewSong() {
    let user = await this.getUserFromDB();

    // @ts-ignore
    let singer: ISinger = await this.getSinger();

    let song: ISong = {
      name: this.songForm.get('name')?.value,
      description: this.songForm.get('description')?.value,
      urlMp3: this.urlMp3,
      avatar: this.avatar,
      musician: this.songForm.get('description')?.value,
      views: this.songForm.get('views')?.value,
    };
    if (user != null){
      song.user = user;
    }
    // @ts-ignore
    if (singer != null){
      song.singer = singer;
    }
    return song;
  }
  async save() {
    const newS: ISong = await this.setNewSong();
    console.log(newS);
    this.songService.createSong(newS).subscribe(() => {
      alert('them roi');
      // this.router.navigate(['songs']);
      console.log(this.urlMp3);
    });
  }

  async getUserFromDB() {
    let userFromLocalStorage = this.authService.currentUserValue;
    return this.userService.getUserByUsername(userFromLocalStorage.username).toPromise();
  }

  // @ts-ignore
  getAllSinger(): ISinger[] {
      this.singerService.getAllSinger().subscribe(value => {
        this.singers = value;
      });
  }
  // @ts-ignore
  getSinger() {
    let singer_id = +this.songForm.get('singer')?.value;
    return  this.singerService.getOneSinger(singer_id).toPromise();
  }
}
