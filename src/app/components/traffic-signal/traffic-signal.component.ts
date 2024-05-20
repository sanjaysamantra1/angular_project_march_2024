import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-traffic-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-signal.component.html',
  styleUrl: './traffic-signal.component.css'
})
export class TrafficSignalComponent {
  config: any;
  colorsArr: string[];
  selectedColor: string = 'red';
  timer: any;
  constructor() {
    this.config = {
      "red": { backgroundColor: 'red', duration: 4000, nextColor: 'green' },
      "green": { backgroundColor: 'green', duration: 3000, nextColor: 'yellow' },
      "yellow": { backgroundColor: 'yellow', duration: 1000, nextColor: 'red' }
    };
    this.colorsArr = Object.keys(this.config);
  }
  ngDoCheck() {
    const { duration, nextColor } = this.config[this.selectedColor];
    this.timer = setTimeout(() => {
      this.selectedColor = nextColor;
    }, duration)
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
