import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
import { ClickcountDirective } from '../../directives/clickcount.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, NumberonlyDirective, HighlightDirective, ClickcountDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  flag: boolean = true;
  n: number = 4;
  x: number = 2;
  cars = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Toyota'];
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  ];
  addEmployee() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
      { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
      { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
      { eId: 108, name: 'sita', sal: 9500, gender: 'female' },
    ]
  }
  employeeTrackBy(emp: any) {
    return emp.eId;
  }
}
