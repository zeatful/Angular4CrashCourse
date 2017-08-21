import { Component } from '@angular/core';

/* 
  Reactive vs Template-driven forms

  Template-drive: using directives to build forms
    - good for simple forms
    - simple validation
    - easier to create
    - less code

  Reactive: using code to customize forms (model driven forms)
    - more control over validation logic
    - good for complex forms
    - unit testable
*/


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) {
    console.log(x);
  }
}
