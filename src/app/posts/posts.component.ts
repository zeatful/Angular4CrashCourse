import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  /* life cycle hooks in angular:
    - OnInit
    - OnChange
    - DoCheck
    - AfterContentInit
    */

  constructor(private service: PostService) { }

  /* called by angular when component is initialized, the implements keyword for OnInit is
    not required to actually invoke ngOnInit(), angular will call them regardless, we did this
    for compile time checking
  */
  ngOnInit() {
    this.service.getPosts()
      .subscribe(
      response => {
        this.posts = response.json();
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
      .subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
      (error: Response) => {
        if (error instanceof BadInputError) {
          // could potentially add it to a form
          // this.form.setErrors(error.json());
        } else throw error; // will hit global hanlder by re throwing it
      });
  }

  updatePost(post) {
    this.service.updatePost(post.id)
      .subscribe(
      response => {
        console.log(response.json());
      });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted')
        } else throw error;
      });
  }
}