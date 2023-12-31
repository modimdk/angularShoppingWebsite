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

  addToCart(selectedProduct: Product, count: number) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems.id === selectedProduct.id) {      
        this.isIncluded = true;
        this.cartData[i].count += count;
      } else {
        this.isIncluded = false;
      }
    }
    if (!this.isIncluded) {
      this.cartData.push(new CartItem(count, selectedProduct));
    }    
  }

  removeFromCart(selectedProduct: Product, count: number) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems === selectedProduct) {
        this.isIncluded = true;
        this.cartData[i].count = count - 1;
        if (this.cartData[i].count === 0) {
          this.cartData.splice(i, this.cartData[i].count);
          // this.cartData = this.cartData.filter(item => item.productItems.id !== selectedProduct.id);
          // this.cartData = this.cartData.filter((item) => item.productItems !== selectedProduct);
        }
      }
    }
  }

  deleteFromCart(selectedProduct: Product) {
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].productItems === selectedProduct) {
        this.cartData[i].count = 0;
        this.cartData.splice(i, this.cartData[i].count);
      }
    }
  }
}
