import { ApiService } from './../../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


 public productList:any;
  constructor(private apiService:ApiService , private cartService:CartService){};


  ngOnInit(){
    this.apiService.getData().subscribe((res)=>{
      this.productList=res;
      console.log(this.productList);
      this.productList.forEach((a:any) => {
        Object.assign(a, {qnty:1 , total:a.price});
      });

    });

  }
addItemsToCart(item:any){
this.cartService.addToCart(item);
}
}
