import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  name: string = 'Sachin Tendulkar';
  img_add: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDUGFX4Ota4MCp2hwoo51UnK-IbukmhEP74CKpX38LA&s'
  flag: boolean = false;
  msg: string = '';
  selectedState: string = 'Odisha';
  num1: number = 0;
  num2: number = 0;
  addMessage = '';

  f1() {
    alert('This is F1.. function')
  }
  toggle(a: any) {
    console.log(a)
    this.flag = !this.flag;
  }
  addition(a: string, b: string) {
    this.addMessage = `Addition of ${a} and ${b} is ${+a + +b}`
  }
}
