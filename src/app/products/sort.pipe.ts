import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortProducts'
})
export class SortPipe implements PipeTransform {

    _ = require('lodash');

    transform(products: any[], value: any, direction: string) {
        return this._.orderBy(products, [value], [direction]);
    }
}