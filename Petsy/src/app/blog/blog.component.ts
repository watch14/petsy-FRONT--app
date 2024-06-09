import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { BlogsPageComponent } from '../blogs-page/blogs-page.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlogsPageComponent,
    CommonModule,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'] // Use styleUrls instead of styleUrl
})
export class BlogComponent implements OnInit {
  blog: any;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve the blog data passed from the previous component
      this.route.paramMap.subscribe(params => {
        const blogData = history.state.blogData;
        if (blogData) {
          this.blog = blogData;
          // Log the title of the blog
          console.log('Blog Title:', this.blog.blogName);
        } else {
          console.error('No blog data found in state');
        }
      });
    }
  }
}
