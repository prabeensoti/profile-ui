import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  blogId: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.blogId = params['blogId'] );
    console.log(this.blogId);
  }

}
