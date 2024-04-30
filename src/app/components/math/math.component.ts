import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {

  // Dependency Injection
  constructor(public mathService: MathService) {
    console.log(this.mathService.add(10, 20))
    console.log(this.mathService.sub(10, 20))
    console.log(this.mathService.mul(10, 20))
  }

}
