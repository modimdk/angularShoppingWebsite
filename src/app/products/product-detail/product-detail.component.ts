import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from '../products.model';
import { ProductsService } from '../products.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product!: Product;
  id!: number;
  productItem = [] 
  productCount: number = 0
 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productsService.getProduct(this.id);
      
    });
  }

  onIncrementCount () {
    this.productCount++
  }

  onDecrementCount () {
    this.productCount--
  }


  // onAddToCart() {
  //   this.cartService.addToCart(this.product);
  //   // console.log("this.product" +this.product.name);
  // }
  
}
