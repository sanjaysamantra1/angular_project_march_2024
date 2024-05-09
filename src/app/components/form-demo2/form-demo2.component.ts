import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {

  submitMyForm(formData: any) {
    console.log(formData.value)
  }
}
