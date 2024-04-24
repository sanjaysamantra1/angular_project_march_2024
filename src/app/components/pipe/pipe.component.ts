import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { PrefixPipe } from '../../pipes/prefix.pipe';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { MySortPipe } from '../../pipes/my-sort.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,
    FormsModule, RemainingPipe, PrefixPipe,
    OrdinalPipe, MySortPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name: string = 'SacHiN tEnDulKAr';
  mySal: number = 5000;
  dateObj = new Date();
  user = { fName: 'sachin', lName: 'tendulkar', add: 'mumbai' };
  arr = [10, 20, 30, 40, 50, 60, 70, 80]
  msg: string = '';
  msg2: string = '';
  cardinal: number = 20;

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
  ];

  numArr1 = [10, 50, 20, 40, 30]
  numArr2 = [10, 50, 20, 40, 30]
  newEle = 0;
}
