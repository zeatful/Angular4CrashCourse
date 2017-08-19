import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }

  getCourses() {
    return ['course1', 'course2', 'course3'];
  }

}
