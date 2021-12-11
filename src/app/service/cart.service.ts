import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList :any =[];
public productsList = new BehaviorSubject<any>([]);
  constructor() { };
  //1-get
  getProducts(){
    return this.productsList.asObservable();
  }
  //2-set
  setProducts(product:any){
     this.cartItemList.push(...product);
     this.productsList.next(product);
  }
  //3- addTOcart
  addToCart(product:any){
 this.cartItemList.push(product);
 this.productsList.next(this.cartItemList);
 this.getTotalPrice();
  }
  //4-removeItem
  removeItem(product:any){
    this.cartItemList.map((a:any , index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    });
    this.productsList.next(this.cartItemList)


  }
  //5-remove all
  removeAll(){
this.cartItemList=[];
this.productsList.next(this.cartItemList);
  }
  //6-getTotalPrice
  getTotalPrice() :number {
 let  grandTotal=0 ;
 this.cartItemList.map((a:any)=>{
   grandTotal += a.total;
 });
 return grandTotal;
  }
}
