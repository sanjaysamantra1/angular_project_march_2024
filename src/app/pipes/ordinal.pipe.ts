import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(input: any): string {
    console.log('Ordinal pipe called')
    let rem = +input % 10;
    let result = ''

    switch (rem) {
      case 1: result = input + 'st'; break;
      case 2: result = input + 'nd'; break;
      case 3: result = input + 'rd'; break;
      default: result = input + 'th'; break;
    }

    return result;

  }

}
