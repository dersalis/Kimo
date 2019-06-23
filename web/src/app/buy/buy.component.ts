import { Component, OnInit } from '@angular/core';
import { BuyService } from '../services/buy.service';
import { IRow } from '../models/ICinema';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  public title: string;
  public date: string;

  public cinema: IRow[] = [];
  public sel_count: number = 0;
  public price: number = 20;
  public total_price: number = 0;

  constructor(private buyService: BuyService) {
    this.title = this.buyService.title;
    this.date = this.buyService.date;
  }

  ngOnInit() {
    this.buyService.getCinema().subscribe(result => {
      this.cinema = result;
      console.log(this.cinema);
    });
  }

  selectCher(id) {
    console.log('Krzesło:', id);
    this.cinema.forEach(cin => {
      cin.chers.forEach(cher => {
        if(cher.id === id) {
          cher.isSelected = !cher.isSelected;
        }
      });
    });
    // Policz wybrane
    this.calc_sel();
  }

  calc_sel() {
    let sel = 0;
    this.cinema.forEach(cin => {
      cin.chers.forEach(cher => {
        if(cher.isSelected) {
          sel++;
        }
      });
    });
    this.sel_count = sel;
    this.total_price = this.price * this.sel_count;
  }
}
