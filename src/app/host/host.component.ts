import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {UserToken} from '../model/user-token';
import {User} from '../model/user';
import {UserService} from '../service/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  // @ts-ignore
  user: Observable<any>;
  // @ts-ignore
  currentUser: UserToken;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.userService.getUserByUsername(value.username).subscribe(value1 => {
        this.user = value1;
      });
    });
  }
  logout(){
    if (confirm('Bạn có chắc chắn muốn thoát không?')){
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
