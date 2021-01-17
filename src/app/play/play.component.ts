import {Component, Input, OnInit} from '@angular/core';
import {ISong} from '../model/song/ISong';
import {SongService} from '../service/song/song.service';
import {BehaviorSubject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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
  ) {
  }

  ngOnInit(): void {
    if (this.songCurrentObject.value !== null) {
      // @ts-ignore
      this.song = this.songCurrentObject.value;
    }
  }

//   this.activatedRouter.params.subscribe(params => {
//   this.bookId = params.id;
//   this.bookService.getBookById(this.bookId).subscribe(result => {
//   this.book = result;
//   this.updateBookForm.setValue({
//                                  title: result.title,
//                                  author: result.author,
//                                  description: result.description
//                                });
// });
// });
}

