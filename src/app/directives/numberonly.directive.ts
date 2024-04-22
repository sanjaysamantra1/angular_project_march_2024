import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]',
  standalone: true
})
export class NumberonlyDirective {
  @HostBinding('style.background-color') myBgColor: string = '';

  @HostListener('keyup', ['$event'])
  handleKeyUp(e: any) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(e.target.value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }

}
