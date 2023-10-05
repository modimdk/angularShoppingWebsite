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
    console.log("ngOnInit", this.cartService.getCart());
    
    for (let i = 0; i < this.cartService.getCart().length; i++) {
      // console.log("after for");
      console.log("cartProducts[i]", this.cartProducts);
      
      // console.log("id 1", this.cartProducts[i]?.productItems.id);
      // console.log("id 2", this.cartService.getCart()[i]?.productItems.id);
      if(this.cartProducts[i]?.productItems.id !== this.cartService.getCart()[i]?.productItems.id){
       
      
        
        this.cartProducts[i] = this.cartService.getCart()[i];
      }
      else{
        this.cartService.getCart()[i].count += this.cartProducts[i].count
      }
    }
    console.log("cartProducts",this.cartProducts);
  }

}
