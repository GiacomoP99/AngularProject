import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { UserLogin } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error_msg = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.loginForm!.get('username');
  }

  get password() {
    return this.loginForm!.get('password');
  }

  ngOnInit(): void {}

  sendForm() {
    if (this.loginForm.valid) {
      let user: UserLogin = {
        username: this.username?.value,
        password: this.password?.value,
      };
      this.authService.login(user).subscribe((data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
      });
    } else {
      this.error_msg = 'missing field : ';
      if (!this.username?.value) this.error_msg += 'name, ';
      if (!this.password?.value) this.error_msg += 'description, ';
    }
  }
}
