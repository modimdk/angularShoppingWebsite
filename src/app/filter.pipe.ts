import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products/products.model';

@Pipe({
    name:'filterProducts'
})

export class FilterPipe implements PipeTransform {
  transform(
    filterdProducts: Product[],
    products: Product[],
    cagtegoryNames: string[]
  ) {
    if (filterdProducts.length === 0) {
      filterdProducts.push(...products);
    } else {
      filterdProducts = [];
    }

    for (let index = 0; index < cagtegoryNames.length; index++) {
      const p = products.filter((p) => p.category == cagtegoryNames[index]);

      for (let j = 0; j < p.length; j++) {
        if (!filterdProducts.includes(p[j])) filterdProducts.push(p[j]);
      }
    }

    if (filterdProducts.length === 0) {
      filterdProducts.push(...products);
    }

    return filterdProducts;
  }
}
