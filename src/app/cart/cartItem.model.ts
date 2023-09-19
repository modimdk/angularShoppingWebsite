import { Product } from "../products/products.model";

export class CartItem {
  public count!: number;
  public productItems: Product ;

  constructor(count: number, productItems: Product) {
    this.count = count;
    this.productItems = productItems;
  }
}
