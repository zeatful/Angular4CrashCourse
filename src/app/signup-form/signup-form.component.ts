import { AbstractControl } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', Validators.required, UsernameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })
    //'user-name': new FormControl() quotes only required when key contains special characters
  });

  login() {
    console.log('login form submitted!');
    /* should call a service to validate login
    let isValid = authService.login(this.form.value);

    if (!isValid) {
    */
    // add validation errors to the form or a specific form control
    // this.username.setErrors()
    this.form.setErrors({
      invalidLogin: true, // or a complex object
    });
    //}
  }

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

}