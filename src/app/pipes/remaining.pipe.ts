import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {

  transform(msg: string, maxChar: number = 100): number {
    console.log(msg, maxChar)
    return maxChar - msg.length;
  }

}
