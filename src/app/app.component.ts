import {Component, ElementRef, ViewChild} from '@angular/core';
import {UserToken} from './model/user-token';
import {UserService} from './service/user/user.service';
import {AuthService} from './service/auth/auth.service';
import {Router} from '@angular/router';
import 'bootstrap/dist/js/bootstrap.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleFirst = 'Project-Sound-Wave-Front-End';
  // @ts-ignore
  user: Observable<any>;
  // @ts-ignore
  currentUser: UserToken;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
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

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}


