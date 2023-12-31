import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../../products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  count: number = 1;

  constructor(
    private cartService: CartService,
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onAddToCart() {
    alert('Added!');
    console.log(this.count);
    // this.count++
    this.cartService.addToCart(this.product, this.count);
  }

  ngOnInit() {}

  onNavigateToDetail(id: number) {
    console.log('onNavigateToDetail');
    this.router.navigate(['/detail', id], { relativeTo: this.route });
  }
}
