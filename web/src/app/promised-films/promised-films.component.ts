import { Component, OnInit } from '@angular/core';
import { IShortFilm } from '../models/IShortFilm';

@Component({
  selector: 'app-promised-films',
  templateUrl: './promised-films.component.html',
  styleUrls: ['./promised-films.component.scss']
})
export class PromisedFilmsComponent implements OnInit {

  private cUrl: string = 'https://media.multikino.pl/thumbnails/50/rc';
  public films: IShortFilm[] = [
    {
      id: 1,
      title: 'Man in Black',
      poster: this.cUrl + '/QTRENzky/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/men-in-black-international-pl_37410a4754.jpg',
      year: 2019,
      type: ''
    },
    {
      id: 2,
      title: 'Godzilla II',
      poster: this.cUrl + '/ODUxRUQ0/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/godzilla-pl_4c8665e69c.jpg',
      year: 2019,
      type: ''
    },
    {
      id: 3,
      title: 'Król Lew',
      poster: this.cUrl + '/QjMzNDRF/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/krol-lew-p3_ba0edb3048.jpg',
      year: 2019,
      type: ''
    },
    {
      id: 4,
      title: 'Pewnego razu w Hollywod',
      poster: this.cUrl + '/NDQ5NkU1/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/pewnego-razu-w-hollywood-pl_3252ab2c1e.jpg',
      year: 2019,
      type: ''
    },
    {
      id: 5,
      title: 'Laleczka',
      poster: this.cUrl + '/MUYzQzlE/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIzMTkiLCI0NzciXSwibW9kZSI6Imluc2V0In19/uploads/images/films_and_events/laleczka-p_33a815403f.jpg',
      year: 2019,
      type: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
