import {Component, OnInit} from '@angular/core';
import {UserToken} from '../model/user-token';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth/auth.service';
import {UserService} from '../service/user/user.service';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  // @ts-ignore
  user: User;
  // @ts-ignore
  currentUser: UserToken;
  // @ts-ignore
  resetPassForm: FormGroup;

  // @ts-ignore
  isMatched: boolean;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    this.resetPassForm = this.formBuilder.group({
      password: [''],
      newpassword: ['']
    });
  }

  resetPassword() {
    this.user.comfirmPassword = this.resetPassForm.value.password;
    // @ts-ignore
    this.userService.checkPassword(this.user).subscribe(value => {
      if (value && (this.resetPassForm.value.password !== this.resetPassForm.value.newpassword)) {
        // @ts-ignore
        this.userService.resetPassword(this.user.username, this.resetPassForm.value.newpassword).subscribe();
        this.router.navigate(['/login']);
      } else {
        alert('Xin kiểm tra lại mật khẩu cũ và Mật khẩu mới không được trùng mật khẩu cũ!');
      }
    });
  }
}


