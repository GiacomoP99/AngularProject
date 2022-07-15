import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';
import { UserSignUp } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  error_msg = '';
  isSuccessful = false;
  isSignUpFailed = false;
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.regForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  get username() {
    return this.regForm!.get('username');
  }

  get password() {
    return this.regForm!.get('password');
  }

  get email() {
    return this.regForm!.get('email');
  }

  ngOnInit(): void {}

  sendForm() {
    if (this.regForm.valid) {
      let user: UserSignUp = {
        username: this.username?.value,
        password: this.password?.value,
        email: this.email?.value,
      };
      this.authService.register(user).subscribe((data) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      });
    } else {
      this.error_msg = 'missing field : ';
      if (!this.username?.value) this.error_msg += 'username, ';
      if (!this.password?.value) this.error_msg += 'password, ';
      if (!this.email?.value) this.error_msg += 'email, ';
    }
  }
}
