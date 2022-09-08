import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cardItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cardItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cardItemList.push(product);
    this.productList.next(this.cardItemList);
    this.getTotalPrices()
    console.log(product)
  }

  getTotalPrices() {
    let grandTotal = 0;
    this.cardItemList.map((a: any) => {
      grandTotal += a.total
    })
  }

  removeCartItem(product: any) {
    this.cardItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cardItemList.splice(index, 1);
      }
    })
  }

  removeAllCart() {
    this.cardItemList = [];
    this.productList.next(this.cardItemList)
  }
}
