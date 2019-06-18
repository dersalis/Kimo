import { Component, OnInit, Input } from '@angular/core';
import { ICity } from '../models/ICity';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})

export class CinemasComponent implements OnInit {

  public cities: ICity[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.getCities().subscribe(response => {
      console.log(response);
      this.cities = response;
    });
  }

}
