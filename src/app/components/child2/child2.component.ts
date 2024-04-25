import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['child1Obj', 'parentAddress']
})
export class Child2Component {
  @Input() b: any;
  
  child1Obj: any;
  parentAddress: any;
}
