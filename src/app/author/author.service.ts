import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }
  getAuthors() {
    return ['Ernest Hemingway', 'Charles Dickens', 'Edgar Allen Poe'];
  }
}