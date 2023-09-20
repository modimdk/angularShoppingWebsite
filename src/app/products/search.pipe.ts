import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.model';
import * as _ from 'lodash'

@Pipe({
    name: 'searchProducts'
}) 

export class SearchPipe implements PipeTransform {

  transform(products: Product[], value: string) {
    return _.filter(products, p => _.includes(p.name, value)  );
  }
}
