import { Component, OnInit } from '@angular/core';
import { IService } from '../models/IService';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {

  public ticets: IService[] = [
    {
      title: '2D',
      type: 'Ulgowy',
      price: 20,
    },
    {
      title: '2D',
      type: 'Normalny',
      price: 30,
    },
    {
      title: '3D',
      type: 'Ulgowy',
      price: 25,
    },
    {
      title: '3D',
      type: 'Normalny',
      price: 35,
    },
  ];

  public dishes: IService[] = [
    {
      title: 'Popcorn',
      type: 'Mały',
      price: 10,
    },
    {
      title: 'Popcorn',
      type: 'Duży',
      price: 15,
    },
    {
      title: 'Nachos',
      type: 'Mały',
      price: 10,
    },
    {
      title: 'Nachos',
      type: 'Duży',
      price: 15,
    },
    {
      title: 'Napój',
      type: 'Mały',
      price: 10,
    },
    {
      title: 'Napój',
      type: 'Duży',
      price: 15,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
