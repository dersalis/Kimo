import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-films-card',
  templateUrl: './current-films-card.component.html',
  styleUrls: ['./current-films-card.component.scss']
})
export class CurrentFilmsCardComponent implements OnInit {

  @Input('title') title: string;
  @Input('type') type: string;
  @Input('year') year: number;
  @Input('poster') poster: string;

  constructor() { }

  ngOnInit() {
  }

}
