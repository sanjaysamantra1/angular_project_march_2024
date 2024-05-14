import { AbstractControl } from '@angular/forms';

export class MyEmailValidator {
    static isValidEmail(inputBox: AbstractControl) {
        if (inputBox.value !== 'sanjay@gmail.com') {
            return { invalidMail: true } //The Control is invalid
        }
        return null; //The control is valid
    }
}


// MyEmailValidator(class) ---> isValidEmail(method) --> invalidEmail :true/false