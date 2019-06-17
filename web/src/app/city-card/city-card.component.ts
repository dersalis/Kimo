import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  @Input('name') name: string;
  @Input('street') street: string;
  @Input('phone') phone: string;
  @Input('email') email: string;
  @Input('web') web: string;
  @Input('image') image: string;

  constructor() { }

  ngOnInit() {
  }

}
