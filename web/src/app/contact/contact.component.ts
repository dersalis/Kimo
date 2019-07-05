import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public fullName: string = 'Damian Ruta';
  public photo: string = '../../assets/dr.jpeg';

  constructor() { }

  ngOnInit() {
  }

}
