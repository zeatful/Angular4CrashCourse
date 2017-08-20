import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from "./favorite/favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task ={
    title: 'Review Applications',
    assignee: null
  }

  canSave = false;

  courses;
  viewMode = 'other';
  //courses = [1, 2];

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }

  title = 'Angular app';
  post = {
    title: 'Title',
    isFavorite: true
  };

  onAdd() {
    this.courses.push({ id: 4, name: 'course4'});
  }

  onChange(course) {
    course.name = 'UPDATED';
  }

  // can be costly with a large list
  // each time these objects are different objecs in memory
  loadCourses() {
    this.courses = [
      { id: 1, name: 'course 1'},
      { id: 2, name: 'course 2'},
      { id: 3, name: 'course 3'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  // define this as an interface
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log('on favorite changed: ', eventArgs);
  }
}