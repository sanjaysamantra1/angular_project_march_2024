import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['aChild'],
  outputs: ['nameEvent']
})
export class Child1Component {
  aChild: any;
  name: string = 'Sanjay Samantra';
  address: string = 'Bangalore';
  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit({ name: this.name, address: this.address });
  }
}
