import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  resetPassword(username: string, password: string): Observable<any> {
    return this.http.put(API_URL + `/users/resetpassword/${username}`, password);
  }

  getUserByUsername(username: any): Observable<any> {
    return this.http.get(API_URL + `/users/${username}`);
  }

  checkPassword(user: User): Observable<any> {
    return this.http.post(API_URL + `/users/resetpassword`, user);
  }
}
