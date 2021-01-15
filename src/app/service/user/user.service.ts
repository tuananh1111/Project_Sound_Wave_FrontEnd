import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI = 'http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.urlAPI);
  }

  create(user: User): Observable<any> {
    return this.http.post<User>(this.urlAPI, user);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.urlAPI + `/${id}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.urlAPI + `/${id}`);
  }
}
