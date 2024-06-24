import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BasketModel } from '../../models/basket.model';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent implements AfterContentChecked{
  api:string ='http://localhost:3000/'
  baskets: BasketModel[] = []
  constructor(private basket:BasketService) {}

  ngAfterContentChecked(): void {
    this.getBaskets()
  }

  getBaskets() {
    this.baskets = this.basket.baskets;
  }
}
