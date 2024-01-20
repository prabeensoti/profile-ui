import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {BlogDetailsModel} from "../../model/blog-details.model";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  blogId?: string;
  blogDetails ?: BlogDetailsModel;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.route.params.subscribe( params => this.blogId = params['blogId'] );
    // blogService.getBlogById(this.blogId).subscribe({
    //   next: (res) => {},
    //   error: ( err) => {}
    // })
    this.blogDetails = {
      contains: "",
      id: "12hds343sdv",
      img: "assets/images/blog_post_1.jpg",
      postDate: new Date(),
      title: "Bootstrap in the Most Popular Framework"
    };
  }

}
