import { Component, OnInit } from '@angular/core';
import { BlogsPageComponent } from '../blogs-page/blogs-page.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogsPageComponent,
            CommonModule,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve the blog data passed from the previous component
    this.blog = history.state.blogData;

    // Log the title of the blog
    console.log('Blog Title:', this.blog.blogName);
    
  }

}