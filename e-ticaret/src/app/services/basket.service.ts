import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  api:string ='http://localhost:3000/'
  baskets: BasketModel[] = [];
  constructor(private http:HttpClient) {
    this.getBaskets();
  }

  delete(id:number){
    this.http.delete<any>(this.api + "basket/" + id).subscribe({
      next: ()=> this.getBaskets(),
      error: (err)=> console.log(err)
    })
  }

  getBaskets() {
    this.http.get<any>(this.api+"basket").subscribe({
      next: (res)=> this.baskets = res,
      error: (err)=> console.log(err)
    })
  }
}
