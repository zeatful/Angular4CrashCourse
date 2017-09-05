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
    this.service.getAll()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
      newPost => {
        post['id'] = newPost.id;
      },
      (error: Response) => {
        // remove the item since it failed on the server
        this.posts.splice(0, 1);

        if (error instanceof BadInputError) {
          // could potentially add it to a form
          // this.form.setErrors(error.json());
        } else throw error; // will hit global hanlder by re throwing it
      });
  }

  updatePost(post) {
    this.service.update(post.id)
      .subscribe(
      updatedPost => {
        console.log(updatedPost);
      });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);

    this.service.delete(345)
      .subscribe(
      () => {
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted')
        } else throw error;
      });
  }
}