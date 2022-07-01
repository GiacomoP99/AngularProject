import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authenticated = false;
  error = '';
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[A-Za-z ]+$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    if (this.loginForm.valid) {
      if (this.username?.value == 'admin' && this.password?.value == 'admin') {
        this.authenticated = true;
        this.router.navigateByUrl('/administration/main');
      } else {
        this.error = 'wrong username or password!';
        this.password?.setValue('');
      }
    }
  }

  ngOnInit(): void {}
}
