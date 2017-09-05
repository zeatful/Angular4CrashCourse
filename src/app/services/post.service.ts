import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  /* 
    Different server error types:
    + Unexpected
      - server is offline
      - network is down
      - unhandled exceptions in apis

    + Expected
      - 404 not found
        Two users, A and B.  User A deletes item 1 but user B still sees item 1 and also tries to 
        perform an action, server returns a 404 for that post id.
      - 400 bad request
        a users attempts to create an account with a username that already exists
  */
  getPosts() {
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
      .catch(this.handleError);
  }

  updatePost(id) {
    // not widely supported, only passes a few properties updated, slightly more performant
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInputError(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }
}