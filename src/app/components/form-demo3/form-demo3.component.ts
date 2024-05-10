import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  registerForm: any = null;

  constructor(private formBuilder: FormBuilder) {

    // this.registerForm = new FormGroup({
    //   firstname: new FormControl(),
    //   lastname: new FormControl(),
    //   email: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     city: new FormControl(),
    //     pin: new FormControl()
    //   })
    // });

    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('Sachin',
        { validators: [Validators.required, Validators.minLength(5)], updateOn: "blur" }),
      lastname: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl()
      })
    })

  }


  submitMyForm(formdata: any) {
    console.log(formdata)
  }
}
