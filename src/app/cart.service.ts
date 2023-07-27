import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  item: Product[] = [];
  constructor() {}
  addToCart(product: Product){
    this.item.push(product);
  }
  getItems(){
    return this.item;
  }
  clearCart(){
    this.item=[];
    return this.item;
  }
}
