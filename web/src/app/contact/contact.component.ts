import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public fullName: string = 'Damian Ruta';
  public photo: string = 'https://media.licdn.com/dms/image/C5603AQF5cTQ_Dc16Nw/profile-displayphoto-shrink_200_200/0?e=1562198400&v=beta&t=jfFgVdOSnP6But4BQ5Ubu_bqdt9xRVpX4cpOszUP9TE';

  constructor() { }

  ngOnInit() {
  }

}
