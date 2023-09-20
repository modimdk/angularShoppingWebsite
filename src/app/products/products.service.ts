import { Product } from './products.model';

export class ProductsService {
  private products: Product[] = [
    new Product(
      0,
      100,
      'Scarf1',
      'This is just a test',
      'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 1'
    ),
    new Product(
      1,
      25,
      'Scarf2',
      'This is just a test',
      'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 2'
    ),
    new Product(
      2,
      130,
      'A Test Item3',
      'This is just a test',
      'https://assets.website-files.com/61\a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 1'
    ),
    new Product(
      3,
      75,
      'A Test Item4',
      'This is just a test',
      'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 2'
    ),
    new Product(
      4,
      500,
      'A Test Item5',
      'This is just a test',
      'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 1'
    ),
    new Product(
      5,
      99,
      'A Test Item6',
      'This is just a test',
      'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/643d8c802b6503808352cf9c_mediamodifier-7cERndkOyDw-unsplash.webp',
      'category 3'
    ),
  ];

  selectedProducts: Product[] = this.products;

  getProducts() {
    return this.products;
  }

  getProduct(index: number) {
    return this.products[index];
  }

  getCategory(category: string) {
    // this.selectedProducts.push(
    //   ...this.products.filter((item) => item.category === category)
    // );
    this.products.filter((item) => item.category === category);
    console.log("this.selectedProducts", this.products.filter((item) => item.category === category));
    // return this.products.filter((item) => item.category === category)
    return this.selectedProducts
    
  }
}
