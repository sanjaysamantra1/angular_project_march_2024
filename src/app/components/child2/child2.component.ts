import { Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['b','child1Obj','parentAddress']
})
export class Child2Component {
  b: any;
  child1Obj:any;
  parentAddress:any;
}
