import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoged: boolean = false;
  userName: string = '';
  isLoginError: boolean = false;

  login: string = '';
  password: string = '';


  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.isLoged = authService.isLoged;
    this.userName = authService.userName;

    // this.isLoged = true;
    // this.userName = "Damian";
  }

  ngOnInit() {
  }


  logOut(): void {
    this.authService.logoOut();
    this.isLoged = false;
    this.userName = '';
  }

  logIn_cancel(): void {
    this.password = '';
    this.login = '';
  }

  logIn_accept(): void {
    this.authService.singIn(this.login, this.password);
    this.isLoged = this.authService.isLoged;
    this.userName = this.authService.userName;
    this.logIn_cancel();

    if(this.isLoged === false) {
      this.isLoginError = true;
    }
  }

  hide_error_win() {
    this.isLoginError = false;
  }
}
