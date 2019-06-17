import { Component, OnInit, Input } from '@angular/core';
import { ICity } from '../models/ICity';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})



export class CinemasComponent implements OnInit {

  public cities: ICity[] = [
    {
      name: 'Poznań',
      street: 'ul. Wiśniowa 45',
      phone: '354-678-968',
      email: 'poznan@kimo.pl',
      web: 'poznan.kimo.pl',
      image: 'http://hypersnap.pl/wp-content/uploads/2017/03/poznan-1670738_640-200x200.jpg',
    },
    {
      name: 'Szczecin',
      street: 'ul. Jabłoniowa 57',
      phone: '567-876-900',
      email: 'szczecin@kimo.pl',
      web: 'szczecin.kimo.pl',
      image: 'https://podroze.smcloud.net/t/photos/t/143174/szczecin_1116553.jpg',
    },
    {
      name: 'Gdańsk',
      street: 'ul. Agrestowa 71',
      phone: '354-567-978',
      email: 'gdansk@kimo.pl',
      web: 'gdansk.kimo.pl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNNVmygYPxguU-p_T_sH8d8-kUkPBjCpBf7riPvi5krMwlPelBg',
    },
    {
      name: 'Warszawa',
      street: 'ul. Migdałowa 38',
      phone: '265-776-467',
      email: 'warszawa@kimo.pl',
      web: 'warszawa.kimo.pl',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjkHTXk5DxhAm9Cao_qk1BwJ0E8JlKnPZIT7VqzjO35x5qzQz8A',
    },
    {
      name: 'Wrocław',
      street: 'ul. Orzechowa 96',
      phone: '978-354-556',
      email: 'wroclaw@kimo.pl',
      web: 'wroclaw.kimo.pl',
      image: 'https://zielonamapa.pl/wp-content/uploads/flickr/wroclaw-atrakcje-zabytki-imprezy-5-200x200.jpg',
    },
    {
      name: 'Kraków',
      street: 'ul. Gruszowa 62',
      phone: '576-664-764',
      email: 'krakow@kimo.pl',
      web: 'krakow.kimo.pl',
      image: 'http://www.wycieczki-krakow.com.pl/wp-content/uploads/2018/01/wycieczki-tematyczne-200x200.jpg',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
