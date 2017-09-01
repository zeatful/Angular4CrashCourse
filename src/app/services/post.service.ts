import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(id) {
    // not widely supported, only passes a few properties updated, slightly more performant
    return this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
  }

  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
  }
}