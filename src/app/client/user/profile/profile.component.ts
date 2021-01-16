import { Component, OnInit } from '@angular/core';
import {UserToken} from '../../../model/user-token';
import {UserService} from '../../../service/user/user.service';
import {AuthService} from '../../../service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  user: Observable<any>;
  // @ts-ignore
  currentUser: UserToken;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.userService.getUserByUsername(value.username).subscribe(value1 => {
        this.user = value1;
      });
    });
  }
}
