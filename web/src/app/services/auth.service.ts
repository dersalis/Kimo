import { Injectable } from '@angular/core';

const users: IUser[] = [
  {
    login: 'damian',
    password: 'p@$$w0rd',
  },
  {
    login: 'magda',
    password: 'p@$$w0rd',
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string = '';
  isLoged: boolean = false;

  constructor() { }

  singIn(login: string, password: string) {
    var correct = false;
    users.forEach((user => {
      if(!correct && login === user.login && password === user.login) {
        correct = true;
        this.userName = login;
        this.isLoged = true;
      }
    }));
  }

  logoOut() {
    this.isLoged = false;
  }
}

export interface IUser {
  login: string;
  password: string;
}
