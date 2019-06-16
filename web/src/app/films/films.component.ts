import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public city: string = 'Poznań';
  isLoged: boolean = false;

  get isUserLoged(): boolean {
    return this.authService.isLoged;
}

  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.isLoged = this.authService.isLoged;
  }

  ngOnInit() {
  }

  public selectCity(city: string): void {
    this.city = city;

  }
}
