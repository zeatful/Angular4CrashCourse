import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  /*
    {{}} is interpolation: 
      use string interpolation to display dynamic text values such as in
      header or paragraph tags
    [] is property binding:
      use for things such a properties, but only binds from
      component to dom (one way binding), but not back (two binding)
  */
  /*
  template: `
    <h2>{{ title }}</h2>
    <h2 [textConent]="title"></h2>
    <img src="{{ imageUrl }}" />
    <img [src]="imageUrl" />
    `,
    */
    // need attr.colspan to tell angular to target colspan attribute
    template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>
      <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Hi</button>
      <button class="btn btn-primary" [class.active]="isActive">Two</button>
      <div (click)="onDivClicked($event)">
        <button (click)="onSave($event)">Save</button>
      </div>
      <img [src]="images" />
      <table>
        <tr>
          <td [attr.colspan]="colSpan"></td>
        </tr>
      </table>
    `,
  styleUrls: ['./course.component.css']
})
class TwoWayBinding{
  isActive = false;
  title = 'List of courses';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;

  constructor() {}

  /*
    causes event bubbling, bubbles up dom tree and gives both click events
    how to stop event bubbling? "$event.stopPropagation();"
  */
  onDivClicked($event){
    console.log("Div was clicked", $event);
  }

  onSave($event) {
    $event.stopPropagation();

    console.log('Button was clicked!', $event);
  }

  onKeyUp(email){
    console.log(email);
  }
}