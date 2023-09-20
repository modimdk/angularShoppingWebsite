import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.model';
import * as _ from 'lodash'

export class FindProducts implements PipeTransform {

    @Pipe({
        name: 'searchProducts'
    })

  transform(products: Product[], value: string) {
    return _.filter(products, p => _.includes(p.name, value)  );
  }
}
