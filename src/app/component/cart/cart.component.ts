import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any= [];
  public grandTotal!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any) => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrices()
    });
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item)
  }

  emptyCart(){
    this.cartService.removeAllCart()
  }
}
