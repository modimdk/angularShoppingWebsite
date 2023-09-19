import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filterdProducts: Product[] = [];

  constructor(private productService: ProductsService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
    this.filterdProducts.push(...this.products);
  }

  selectCategory(cagtegoryNames: string[]) {
    if (this.filterdProducts.length === 0) {
      this.filterdProducts.push(...this.products);
    } else {
      this.filterdProducts = [];
    }

    for (let index = 0; index < cagtegoryNames.length; index++) {
      const p = this.products.filter(
        (p) => p.category == cagtegoryNames[index]
      );

      for (let j = 0; j < p.length; j++) {
        if (!this.filterdProducts.includes(p[j]))
          this.filterdProducts.push(p[j]);
      }
    }

    console.log(this.filterdProducts);
    if (this.filterdProducts.length === 0) {
      this.filterdProducts.push(...this.products);
    }
  }
}
