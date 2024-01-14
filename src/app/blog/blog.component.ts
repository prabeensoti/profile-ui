import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {BlogsModel} from "../model/Blogs.model";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgbPagination
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  blogs: BlogsModel[];

  constructor() {
    this.blogs = [{
      id: "12hds343sdv",
      title: "Bootstrap in the Most Popular Framework",
      img: "assets/images/blog_post_1.jpg",
      postDate: new Date(),
    }]
  }

}
