export interface User {
  username: string;
  roles: string[];
  email: string;
  accessToken: string;
}

export interface UserSignUp {
  username: string;
  password: string;
  email: string;
}

export interface UserLogin {
  username: string;
  password: string;
}
