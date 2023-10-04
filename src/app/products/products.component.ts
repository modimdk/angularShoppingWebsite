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
  date = new Date();
  _ = require('lodash');
  sortDirection: string = 'asc';
  query = '';

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

  sortProducts(direction: string) {
    this.filterdProducts = this._.orderBy(
      this.filterdProducts,
      ['price'],
      [direction]
    );
  }

  imgCollection: Array<object> = [
    {
      image:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      alt: 'Image 1',
      title: 'Image 1',
    },
    {
      image:  'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      title: 'Image 2',
      alt: 'Image 2',
    },
    {
      image:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:  'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      title: 'Image 3',
      alt: 'Image 3',
    },
    {
      image:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      title: 'Image 4',
      alt: 'Image 4',
    },
    {
      image:  'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:  'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      title: 'Image 5',
      alt: 'Image 5',
    },
    {
      image:   'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      thumbImage:  'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      title: 'Image 6',
      alt: 'Image 6',
    },
  ];
}
