import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['child1Obj', 'parentAddress']
})
export class Child2Component implements AfterViewInit {
  @Input() b: any;
  @ViewChild('myInputBox') myInput: any;

  child1Obj: any;
  parentAddress: any;

  constructor() {
    console.log('child-2 constructor');
    console.log(this.myInput)
  }
  ngAfterViewInit(): void {
    console.log('child-2 after view init')
    console.log(this.myInput);
    this.myInput.nativeElement.focus()
  }
}
