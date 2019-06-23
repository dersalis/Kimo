import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FilmsNowService } from '../services/films-now.service';
import { IShortFilm } from '../models/IShortFilm';
import { Router } from '@angular/router';
import { BuyService } from '../services/buy.service';

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

  public allFilms: IShortFilm[] = [];
  public films: IShortFilm[] = [];

  public selectCity(city: string): void {
    this.city = city;
    this.films = this.allFilms.filter(f => f.cities.includes(city));
  }

  constructor(private authService: AuthService,
    private filmsNowService: FilmsNowService,
    private router: Router,
    private buyService: BuyService) {
    this.authService = authService;
    this.isLoged = this.authService.isLoged;
  }

  ngOnInit() {
    this.filmsNowService.getFilms().subscribe(response => {
      this.allFilms = response;
      this.selectCity(this.city);
    });
  }

  buyTicket(film: string, date: string): void {
    this.buyService.title = film;
    this.buyService.date = date;
    this.router.navigate(['buy']);
  }
}
