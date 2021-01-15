import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISong} from '../../model/song/ISong';
import {environment} from "../../../environments/environment";


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
}