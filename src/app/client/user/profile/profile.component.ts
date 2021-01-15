import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
// @ts-ignore
  user: User;
// @ts-ignore
  id: number;

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.getUserById(this.id);
  }

  getUserById(id: number): User {
    this.userService.findById(id).subscribe(data => {
      this.user = data;
    });
    return this.user;
  }
}
