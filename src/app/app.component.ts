import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from "./favorite/favorite.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ];
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

  // define this as an interface
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log('on favorite changed: ', eventArgs);
  }
}