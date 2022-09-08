import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  //errorMsg: string = 'There was an issue fetching product data 😭😢';
  constructor(private api: ApiService,private cartService: CartService ) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a:any)=> {
        Object.assign(a, {quantity:1 , total: a.price})
      })
    });
  }

  addToCart( product:any){
 this.cartService.addToCart(product)
  }
}
