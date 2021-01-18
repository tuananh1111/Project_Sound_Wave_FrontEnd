import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ISong} from '../../model/song/ISong';


const URL_API = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) {
  }

  getAllSong(): Observable<ISong[]> {
    return this.httpClient.get<any>(URL_API + '/songs');
  }

  createSong(song: ISong): Observable<any> {
    return this.httpClient.post<ISong>(URL_API + '/songs' , song);
  }

  getSongById(id: number): Observable<any> {
    return this.httpClient.post(URL_API + `/songs/getsong`, id);
  }
  getMySongs(id: number): Observable<any> {
    return this.httpClient.post<ISong[]>(URL_API + `/songs/my-songs/`, id);
  }
  updateSong(song: ISong): Observable<any> {
    return this.httpClient.put<ISong>(URL_API +  `songs/${song.id}`, song)
  }
  getSong(id: number): Observable<any> {
    return this.httpClient.get<ISong>(URL_API + `songs/${id}`);
  }
  countViews(id: number): Observable<any> {
    return this.httpClient.post<ISong>(URL_API + `/songs/count-views`, id);
  }
}
