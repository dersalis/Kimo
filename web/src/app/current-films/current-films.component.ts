import { Component, OnInit } from '@angular/core';
import { IShortFilm } from '../models/IShortFilm';
import { FilmsPromService } from '../services/films-prom.service';
import { FilmsNowService } from '../services/films-now.service';

@Component({
  selector: 'app-current-films',
  templateUrl: './current-films.component.html',
  styleUrls: ['./current-films.component.scss']
})
export class CurrentFilmsComponent implements OnInit {

  // films: IShortFilm[] = [
  //   {
  //     id: 1,
  //     title: 'X-Men',
  //     type: 'Science-Fiction',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/MTFCMUNG/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/mroczna-phoenix-pl2_3f4ab84c1c.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'Rocketman',
  //     type: 'Biograficzny',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/MDY0NzBF/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/rocketman-pl-1_958bdf6811.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: 'DETEKTYW PIKACHU',
  //     type: 'Akcja',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/MDgzNTg4/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/pokemon-pl_b70d15dca6.jpg'
  //   },
  //   {
  //     id: 4,
  //     title: 'SPIDER-MAN',
  //     type: 'Akcja',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/ODJFRDRB/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/spider-man-daleko-od-domu-pl_4280f9f175.jpg'
  //   },
  //   {
  //     id: 5,
  //     title: 'ALADYN',
  //     type: 'Familijny',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/QjE1QzdF/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/aladyn-pl_19d4c36c0d.jpg'
  //   },
  //   {
  //     id: 6,
  //     title: 'JOHN WICK 3',
  //     type: 'Akcja',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/NjY1Mjky/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/john-wick-3-pl_e66ee15883.jpg'
  //   },
  //   {
  //     id: 7,
  //     title: 'AVENGERS',
  //     type: 'Akcja',
  //     year: 2019,
  //     poster: 'https://media.multikino.pl/thumbnails/50/rc/QUU4NkQ5/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIyMDAiLCIxMDAwMCJdLCJtb2RlIjoiaW5zZXQifX0=/uploads/images/films_and_events/avengers-koniec-gry-pl_1d8be1db34.jpg'
  //   },
  // ];

  films: IShortFilm[] = [];

  constructor(private filmsNowService: FilmsNowService) { }

  ngOnInit() {
    this.filmsNowService.getFilms().subscribe(response => {
      this.films = response;
    });
  }

}
