import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true,
  // pure: false  // impure pipe
})
export class PrefixPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    console.log('prefix pipe called')
    return gender === 'male' ? `Mr. ${name}` : `Miss. ${name}`;
  }

}
