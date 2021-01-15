import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth/auth.service";
import {UserService} from "../service/user/user.service";
import {IUser} from "../model/IUser";
import {UserToken} from "../model/user-token";

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  // @ts-ignore
  user: IUser;
  // @ts-ignore
  userCurrent: UserToken;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value => {
      this.userCurrent = value;
      this.userService.getUserByUsername(value.username).subscribe(value1 => {
        this.user = value1;
      })
    });
  }
}
