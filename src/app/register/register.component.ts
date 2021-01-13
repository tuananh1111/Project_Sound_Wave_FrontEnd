import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  formRegister: FormGroup;
  // @ts-ignore
  user: User;

  constructor(private serviceAuth: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formRegister = this.fb.group({
      username: [null],
      password: [null],
      phoneNumber: [null]
    });
  }

  // tslint:disable-next-line:typedef
  register() {
    const user1: User = this.formRegister.value;
    this.serviceAuth.register(user1).subscribe(value =>
      alert('Register Account Successful !!!'));
    this.router.navigate(['/login']);
  }

}
