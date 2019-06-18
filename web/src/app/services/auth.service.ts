import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const users: IUser[] = [
  {
    login: 'damian',
    password: 'p@$$w0rd',
  },
  {
    login: 'magda',
    password: 'p@$$w0rd',
  },
  {
    login: 'wojtek',
    password: 'p@$$w0rd',
  },
  {
    login: 'marcin',
    password: 'p@$$w0rd',
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string = '';
  isLoged: boolean = false;
  correct: boolean = false;

  loginStateChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loginStateChange.subscribe((value) => {
      this.isLoged = value;
  });
  }

  toggleLoginState(state) {
    this.loginStateChange.next(state);
}

  singIn(login: string, password: string) {
    this.correct = false;
    users.forEach((user => {
      if(this.correct === false) {
        if(user.login === login && user.password === password) {
          this.correct = true;
          this.userName = login;
          // this.isLoged = true;
          this.toggleLoginState(true);
        }
      }

    }));
  }

  logoOut() {
    // this.isLoged = false;
    this.toggleLoginState(false);
  }
}

export interface IUser {
  login: string;
  password: string;
}
