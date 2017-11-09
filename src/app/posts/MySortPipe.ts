import { Pipe , PipeTransform } from '@angular/core';
import {copy} from "fs-extra";

@Pipe({
  name: 'sort'
})
export class MySortPipe implements PipeTransform {

 public transform(array: any[], field: string): any[] {

    if(array == null){
     return array;
    }
    //array is readonly, make a copy for sorting.
    var nArray = array.slice();

   nArray.sort((a, b) => {
                       return a[field].toLowerCase() < b[field].toLowerCase() ? -1 : 1;
                    }
    );
    return nArray;
  }
}
