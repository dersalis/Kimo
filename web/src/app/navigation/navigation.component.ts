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

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.isLoged = authService.isLoged;
    this.userName = authService.userName;

    this.isLoged = true;
    this.userName = "Damian";
  }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logoOut();
    this.isLoged = false;
    this.userName = '';
  }
}
