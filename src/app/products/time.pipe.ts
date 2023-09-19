import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timePipe'
})

export class TimePipe implements PipeTransform {
  transform(date: any) : any {
    return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate();
  }
}
