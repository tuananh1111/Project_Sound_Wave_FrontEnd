import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ISong} from '../../interface/i-song';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

// tslint:disable-next-line:variable-name
private url_API = 'http://localhost:8080/songs';
  constructor(private http: HttpClient) { }
  edit(song: ISong): Observable<any> {
  return this.http.put<ISong>(this.url_API + `/${song.id}`, song);
  }
  findById(id: number): Observable<any> {
    return this.http.get(this.url_API + `/${id}`);
  }
}
