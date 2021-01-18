import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Playlist} from '../../model/playlist';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private http: HttpClient) { }
  getAllPlaylist(): Observable<Playlist[]>{
    return this.http.get<any>(API_URL + '/playlists');
  }
  getOnePlaylist(id: number): Observable<any> {
    return this.http.get<Playlist>(API_URL + '/playlists' + `/${id}`);
  }
  createPlaylist(playlist: Playlist): Observable<any>{
    return this.http.post<Playlist>(API_URL + `/playlists`, playlist);
  }
  editPlaylist(playlist: Playlist): Observable<any>{
    return this.http.put<Playlist>(API_URL + `/playlists/${playlist.id}`, playlist );
  }
  deletePlaylist(id: number): Observable<any>{
    return this.http.delete(API_URL + `/playlists/${id}`);
  }
  getPlaylistsHot(): Observable<any>{
    return this.http.get<Playlist[]>(API_URL + '/playlists/mostviews');
  }
}
