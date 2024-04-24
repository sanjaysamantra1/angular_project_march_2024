import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  standalone: true,
  pure: false
})
export class MySortPipe implements PipeTransform {

  transform(arr: any): any {
    console.log('Sort pipe called')
    return arr.sort((a: number, b: number) => a - b);
  }

}
