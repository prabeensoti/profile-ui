import {Component, OnInit} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {BlogsModel} from "../model/blogs.model";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {BlogService} from "../service/blog.service";

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
export class BlogComponent{

  blogs: BlogsModel[];

  constructor(private blogService: BlogService) {
    this.blogs = [];
    this.blogService.getAllBlogs().subscribe({
      next: (res) => {
        this.blogs=res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
