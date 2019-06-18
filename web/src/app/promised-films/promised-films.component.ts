import { Component, OnInit } from '@angular/core';
import { IShortFilm } from '../models/IShortFilm';
import { FilmsNowService } from '../services/films-now.service';
import { FilmsPromService } from '../services/films-prom.service';

@Component({
  selector: 'app-promised-films',
  templateUrl: './promised-films.component.html',
  styleUrls: ['./promised-films.component.scss']
})
export class PromisedFilmsComponent implements OnInit {

  private cUrl: string = 'https://media.multikino.pl/thumbnails/50/rc';
  public films: IShortFilm[] = [];

  constructor(private filmsPromService: FilmsPromService) { }

  ngOnInit() {
    this.filmsPromService.getFilms().subscribe(response => {
      console.log(response);
      this.films = response;
    });
  }
}
