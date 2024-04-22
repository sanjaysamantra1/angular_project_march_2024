import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[clickcount]',
  standalone: true
})
export class ClickcountDirective {
  count: number = 0;

  @HostListener('click')
  f1() {
    this.count++;
    console.log(this.count)
  }

}
