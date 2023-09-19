import { Component, Input, OnInit, NgModule } from '@angular/core';
import { CartItem } from '../../cartItem.model';
import { CartService } from '../../cart.service';
import { Product } from 'src/app/products/products.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct?: CartItem;
  totalPrice?: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.totalPrice = this.cartProduct.count * this.cartProduct?.productItems.price;
  }

  calculateTotalPrice(num1: number, num2: number) {
    return num1 * num2;
  }

  onAddItem (product: Product) {
    this.cartService.addToCart(product)
  }


  onRemoveItem(product: Product) {
    this.cartService.removeFromCart(product);
  }

  onDeleteItem(product: Product) {
    this.cartService.deleteFromCart(product)
  }
}
