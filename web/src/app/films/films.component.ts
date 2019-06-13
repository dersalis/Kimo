import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public city: string = 'Poznań';

  constructor() { }

  ngOnInit() {
  }

  public selectCity(city: string): void {
    this.city = city;

  }
}
