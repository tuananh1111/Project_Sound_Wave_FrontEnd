import {Component, OnInit} from '@angular/core';
import {ISong} from '../../../../model/i-song';
import {FormGroup, FormBuilder} from '@angular/forms';
import {SongService} from '../../../../service/song/song.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // @ts-ignore
  private id: number;
  // @ts-ignore
  song: ISong;
  // @ts-ignore
  editForm: FormGroup;
  constructor(
    private songService: SongService,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: [''],
      description: [''],
      avatar: [''],
      musician: [''],
      singer: [''],
      category: [''],
      album: ['']
    });
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.songService.findById(this.id).toPromise().then(value => {
        this.song = value;
        this.editForm.patchValue({
          name: this.song.name,
          description: this.song.description,
          avatar: this.song.avatar,
          musician: this.song.musician,
          singer: this.song.singer.name,
          category: this.song.category.name,
          album: this.song.album.name
        });
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSongUpdate() {
    if (this.editForm) {
      this.song.name = this.editForm.value.name;
      this.song.description = this.editForm.value.description;
      this.song.avatar = this.editForm.value.avatar;
      this.song.musician = this.editForm.value.musician;
      this.song.singer = this.editForm.value.singer;
      this.song.category = this.editForm.value.category;
      this.song.album = this.editForm.value.album;
      this.songService.edit(this.song).toPromise().then(value => {
        alert('OK');
      });
    }
  }
}
