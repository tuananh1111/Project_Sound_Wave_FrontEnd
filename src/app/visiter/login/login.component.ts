import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {UserToken} from '../../model/user-token';
import {first} from 'rxjs/operators';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  currentUser: UserToken;
  user: User = {
    username: '',
    password: ''
  };
  returnUrl = '';

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.authService.currentUser.subscribe(value => this.currentUser = value);
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/host';
  }

  // tslint:disable-next-line:typedef
  login() {
    // @ts-ignore
    this.authService.login(this.user.username, this.user.password)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      });
  }

}
