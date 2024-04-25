import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a = 100;
  b = 200;
  parentName: any;
  parentAddress: any;
  receiveNameFromChild(data: any) {
    this.parentName = data.name;
    this.parentAddress = data.address;
  }
}
