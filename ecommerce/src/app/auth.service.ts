import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserLogin, UserSignUp } from './user';

const AUTH_API = 'http://localhost:8081/Ecommerce/api/v1/public/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<User> {
    return this.http.post<User>(
      AUTH_API + 'signin',
      {
        username: user.username,
        password: user.password,
      },
      httpOptions
    );
  }

  register(user: UserSignUp): Observable<string> {
    return this.http.post<string>(
      AUTH_API + 'signup',
      {
        username: user.username,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
}
