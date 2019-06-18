import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity } from '../models/ICity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  public getCities(): Observable<any> {
    return this.httpClient.get<ICity[]>("assets/cities.json");
  }

}
