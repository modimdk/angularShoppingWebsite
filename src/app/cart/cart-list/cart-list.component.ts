import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cartItem.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartProducts: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    for (let i = 0; i < this.cartService.getCart().length; i++) {
      this.cartProducts[i] = this.cartService.getCart()[i];
    }
    console.log("cartProducts",this.cartProducts);
  }

}
