import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-promised-films-ball',
  templateUrl: './promised-films-ball.component.html',
  styleUrls: ['./promised-films-ball.component.scss']
})
export class PromisedFilmsBallComponent implements OnInit {

  @Input('title') title: string;
  @Input('poster') poster: string;

  constructor() { }

  ngOnInit() {
  }

}
