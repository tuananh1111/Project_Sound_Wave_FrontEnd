import { Component, OnInit } from '@angular/core';
import {SongService} from "../../../service/song/song.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ISong} from "../../../model/song/ISong";
import {Observable} from "rxjs";
import {ISinger} from "../../../model/singer/ISinger";
import {ICategory} from "../../../model/category/ICategory";
import {IAlbum} from "../../../model/album/IAlbum";
import {AngularFireStorage} from "@angular/fire/storage";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user/user.service";
import {SingerService} from "../../../service/singer/singer.service";
import {CategoryService} from "../../../service/category/category.service";
import {AlbumService} from "../../../service/album/album.service";
import {finalize} from "rxjs/operators";
import {User} from "../../../model/user";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  name = '';
  description = '';
  urlMp3 = '';
  avatar = '';
  musician = '';
  views = 0;
  // @ts-ignore
  userCurrent: UserToken;
  // @ts-ignore
  user: IUser;
  title = 'cloudsSorage';
  // @ts-ignore
  selectedFile: File = null;
  // @ts-ignore
  fb;
  // @ts-ignore
  downloadURL: Observable<string>;
  singers: ISinger[] = [];
  categories: ICategory[] = [];
  albums: IAlbum[] = [];
  failMessage = '';
  // @ts-ignore
  songCurrent: ISong ;
  // @ts-ignore
  id: number;

  constructor(
    private storage: AngularFireStorage,
    private fbd: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private songService: SongService,
    private singerService: SingerService,
    private categoryService: CategoryService,
    private albumService: AlbumService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getAllSinger();
    this.getAllCategory();
    this.getAllAlbum();
  }
  songForm: FormGroup = this.fbd.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    musician: new FormControl('', Validators.required),
    views: new FormControl('', Validators.required),
    singer: new FormControl('', Validators.required),
    category:  new FormControl('', Validators.required),
    album: new FormControl('', Validators.required),
    avatar: new FormControl(''),
    urlMp3: new FormControl(''),
  });
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      // @ts-ignore
      this.id = param.get('id');
      console.log(this.id);
      this.songService.getSong(this.id).subscribe(result => {
        this.songCurrent = result;
        console.log(result);
        this.songForm.patchValue(this.songCurrent);
        console.log(this.songCurrent);
      }, error => {
        console.log("loi");
        console.log(error);
      });
    });
  }
  // @ts-ignore
  saveUrlMp3(event) {
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe( finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url != "") {
              this.fb = url;
              this.urlMp3 = url;
            } else {
              this.urlMp3 = this.songForm.get('urlMp3')?.value;
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
  // tslint:disable-next-line:typedef
  saveAvatar(event) {
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe( finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url != "") {
              this.fb = url;
              this.avatar = url;
            }
            else {
              this.avatar = this.songForm.get('avatar')?.value;
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
  // tslint:disable-next-line:typedef
  async setNewSong() {
    const user: User = await this.getUserFromDB();
    const singer: ISinger = await this.getSinger();
    const category: ICategory = await this.getCategory();
    const album: IAlbum = await  this.getOneAlbum();
    let newUrlMp3 : string;
    let newAvatar : string;
    if (this.urlMp3 != "") {
      newUrlMp3 = this.urlMp3
      console.log(newUrlMp3);
    } else {
      newUrlMp3 =  this.songForm.get('urlMp3')?.value;
      console.log(newUrlMp3);
    }
    if (this.avatar != "") {
      newAvatar = this.avatar
      console.log(newAvatar);
    } else {
      newAvatar =  this.songForm.get('avatar')?.value;
      console.log(newAvatar);
    }
    const song: ISong = {
      id: this.songCurrent.id,
      name: this.songForm.get('name')?.value,
      description: this.songForm.get('description')?.value,
      urlMp3: newUrlMp3,
      avatar: newAvatar,
      musician: this.songForm.get('description')?.value
    };
    if (user != null){
      song.user = user;
    }
    if (singer != null){
      song.singer = singer;
    }
    if (category != null){
      song.category = category;
    }
    if (album != null){
      song.album = album;
    }
    return song;
  }
  // tslint:disable-next-line:typedef
  async update() {
    const newS: ISong = await this.setNewSong();
    console.log(newS);
    this.songService.updateSong(newS).subscribe(() => {
      alert('update song successful');
      this.router.navigate(['songs']);
      console.log(this.urlMp3);
    });
  }

  async getUserFromDB() {
    const userFromLocalStorage = this.authService.currentUserValue;
    return this.userService.getUserByUsername(userFromLocalStorage.username).toPromise();
  }

  // @ts-ignore
  getAllSinger(): ISinger[] {
    this.singerService.getAllSinger().subscribe(value => {
      this.singers = value;
    });
  }
  getSinger() {
    const singer_id = +this.songForm.get('singer')?.value;
    return  this.singerService.getOneSinger(singer_id).toPromise();
  }
  // @ts-ignore
  getAllCategory(): ICategory[] {
    this.categoryService.getAllCategory().subscribe(value => this.categories = value);
  }
  getCategory() {
    const category_id = +this.songForm.get('category')?.value;
    return  this.categoryService.getCategory(category_id).toPromise();
  }
  // @ts-ignore
  getAllAlbum(): IAlbum[] {
    this.albumService.getAllAlbum().subscribe(value => this.albums = value);
  }

  getOneAlbum(): IAlbum {
    const album_id = +this.songForm.get('album')?.value;
    // @ts-ignore
    return  this.albumService.getOneAlbum(album_id).toPromise();
  }

}
