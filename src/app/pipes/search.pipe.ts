import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(inputArr: any, searchText: string): any {
    if (!inputArr) return [];
    if (!searchText) return inputArr;

    return inputArr.filter((ele: any) => {
      return JSON.stringify(ele).includes(searchText);
    })

  }

}
