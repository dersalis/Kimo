import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRow } from '../models/ICinema';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  public title: string;
  public date: string;

  constructor(private httpClient: HttpClient) { }

  getCinema(): Observable<any> {
    return this.httpClient.get<IRow[]>("assets/cinema.json");
  }
}
