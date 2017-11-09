import { Pipe , PipeTransform } from '@angular/core';
import {Book} from './book';

@Pipe({
  name: 'sort'
})
export class MySortPipe implements PipeTransform {
 public transform(array: any[], field: string): any[] {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
