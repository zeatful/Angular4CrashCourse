import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // if you don't expect the user to navigate back and fourth
    //let id = this.route.snapshot.paramMap.get('id');

    // by using subscribe we don't have to reinitialize the component after multiple routes back and fourth
    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id'); // + converts string to a number
        console.log(id);
      })
  }

}
