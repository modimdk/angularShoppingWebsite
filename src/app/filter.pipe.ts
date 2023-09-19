import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string[]): any {
    if (value === 0 || value === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.category === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
