import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../products/products.model';
import { CartItem } from './cartItem.model';

@Injectable()
export class CartService {
  cartData: CartItem[] = [];
  isIncluded: boolean = false;

  getCart() {
    return this.cartData;
  }

  addToCart(selectedProduct: Product) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems === selectedProduct) {
        this.isIncluded = true;
        this.cartData[i].count++;
      } else {
        this.isIncluded = false;
      }
    }
    if (!this.isIncluded) {
      this.cartData.push(new CartItem(1, selectedProduct));
    }

    console.log(this.cartData);
  }

  removeFromCart(selectedProduct: Product) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems === selectedProduct) {
        this.isIncluded = true;
        this.cartData[i].count--;
        if (this.cartData[i].count === 0) {
          this.cartData.splice(i, this.cartData[i].count);
          // this.cartData = this.cartData.filter(item => item.productItems.id !== selectedProduct.id);
          // this.cartData = this.cartData.filter((item) => item.productItems !== selectedProduct);
        }
      }
    }
    console.log(this.cartData);
  }

  deleteFromCart(selectedProduct: Product) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems === selectedProduct) {
        this.cartData[i].count = 0;
        this.cartData.splice(i, this.cartData[i].count);
      }
    }
    console.log(this.cartData);
  }
}
