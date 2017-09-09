import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      this.service.getAll()
        .subscribe(followers => this.followers = followers);
      //this.service.getAll({id: id, page: page});
    })
  }
}
