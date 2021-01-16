import {Component, OnInit} from '@angular/core';
import {UserToken} from '../../../model/user-token';
import {UserService} from '../../../service/user/user.service';
import {AuthService} from '../../../service/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // @ts-ignore
  user: Observable<any>;
  // @ts-ignore
  currentUser: UserToken;
  // @ts-ignore
  updateUserForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.updateUserForm = this.fb.group({
      id: [''],
      username: [''],
      fullName: ['']
    });
    this.authService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.userService.getUserByUsername(value.username).subscribe(value1 => {
        this.user = value1;
        this.updateUserForm.setValue({
          id: this.user.id,
          username: this.user.username,
          fullName: this.user.fullName
        });
      });
    });
  }

  updateUser() {
    this.user.id = this.updateUserForm.value.id;
    this.user.username = this.updateUserForm.value.username;
    this.user.fullName = this.updateUserForm.value.fullName;
    this.userService.updateUser(this.user).subscribe(() => {
      alert('Cập nhật User thành công!');
      this.router.navigate(['/host']);
    }, error => {
      alert('Lỗi!');
    });
  }
}
