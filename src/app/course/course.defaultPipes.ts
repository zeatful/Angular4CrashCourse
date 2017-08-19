import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    /*
        [()]: two way binding
    */
    template: `
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number: '2.1-1' }} <br/>
    {{ course.price | currency: 'AUD':true:'3.2-2'}} <br/>
    {{ course.releaseDate | date:'longDate'}} <br/>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
class DefaultPipes {
    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
}