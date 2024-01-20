import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {BlogsModel} from "../model/blogs.model";
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
      url: "https://blog.hellomedian.com/new-site-new-features-ef3d416aecf8",
      title: "Bootstrap in the Most Popular Framework",
      img: "assets/images/blog_post_1.jpg",
      year: "2023",
      month: "SEP",
      day: "29"
    }]
  }

}
