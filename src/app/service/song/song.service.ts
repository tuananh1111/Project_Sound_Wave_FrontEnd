import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Song} from '../../model/song';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})

export class SongService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    return this.http.get<Song>(API_URL + '/songs');
  }
  createSong(song: Song): Observable<any> {
    return this.http.post<Song>(API_URL + '/songs', song);
  }
}
