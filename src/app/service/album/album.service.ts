import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../../model/category/ICategory";
import {IAlbum} from "../../model/album/IAlbum";
const urlApi = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbum(): Observable<any> {
    return this.httpClient.get<ICategory[]>(urlApi + '/albums');
  }

  getOneAlbum(id: number): Observable<any> {
    return this.httpClient.get<IAlbum>(urlApi + '/albums' + `/${id}`)
  }
}
