import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name: string = 'Sachin Tendulkar';
  img_add: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDUGFX4Ota4MCp2hwoo51UnK-IbukmhEP74CKpX38LA&s'
  flag: boolean = false;

  f1() {
    alert('This is F1.. function')
  }
  toggle() {
    this.flag = !this.flag;
  }
}
