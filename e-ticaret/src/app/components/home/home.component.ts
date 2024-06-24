import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/products.model';
import { HttpClient } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private http:HttpClient) {}
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
}
