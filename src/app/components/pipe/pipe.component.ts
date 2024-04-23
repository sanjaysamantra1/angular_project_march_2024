import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,FormsModule,RemainingPipe],
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
}
