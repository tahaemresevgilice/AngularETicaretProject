import { Component, model, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private http:HttpClient,private basket:BasketService) {}
  api:string ='http://localhost:3000/'
  product: ProductModel = new ProductModel();
  products: ProductModel[] = []
 ngOnInit(){
  this.urunListele();
 }
 urunListele(){
  this.http.get<any>(this.api + "products").subscribe({
    next: (res) => this.products = res,
    error: (err) => console.log(err)
  })
 }
 urunEkle(){
  this.http.post<any>(this.api + "products",this.product).subscribe({
    next:(res) => {
      this.urunListele();
      this.product = new ProductModel();
    },
    error:(err) => console.log(err)
  })
  this.product = new ProductModel();
 }
 sepeteEkle(model:ProductModel){
  this.http.post<any>(this.api + "basket", model).subscribe({
    next: ()=> {
      console.log("Ürün Sepete Eklendi")
      this.getBaskets();
    },
    error: (err)=> console.log(err)
  })
 }
 getBaskets() {
    this.http.get<any>(this.api+"basket").subscribe({
      next: (res)=> this.basket.baskets = res,
      error: (err)=> console.log(err)
    })
  }
}
