import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IShortFilm } from '../models/IShortFilm';

@Injectable({
  providedIn: 'root'
})
export class FilmsNowService {

  constructor(private httpClient: HttpClient) { }

  public getFilms(): Observable<any> {
    return this.httpClient.get<IShortFilm[]>("assets/films_now.json");
  }
}
