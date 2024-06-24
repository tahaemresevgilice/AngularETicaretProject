import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements AfterContentChecked {
  baskets:BasketModel[] = []
  constructor(private basket:BasketService) {}

  ngAfterContentChecked() {
    this.baskets = this.basket.baskets;
  }

  delete(id:number){
    this.basket.delete(id,);
  }

}
