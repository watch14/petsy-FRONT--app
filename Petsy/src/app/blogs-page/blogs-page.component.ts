import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import mammoth from 'mammoth'; // Import Mammoth.js for Word to HTML conversion
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule,
            RouterLink,
            RouterModule,
  ],
  templateUrl: './blogs-page.component.html',
  styleUrl: './blogs-page.component.css'
})
export class BlogsPageComponent {

  constructor(private router: Router, private sanitizer: DomSanitizer) {}


  blogs: { blogPicture: string, blogName: string, blogContent: string }[] = [
    {
      blogPicture: "../../assets/images/blog-images/blog_image (1).png",
      blogName: "Unveiling the Secrets of Pet Nutrition",
      blogContent: "" // Content will be loaded dynamically from Word file
    },
    {
      blogPicture: "../../assets/images/blog-images/blog_image (2).png",
      blogName: "Common Pet Ailments",
      blogContent: "" // Content will be loaded dynamically from Word file
    },
    {
      blogPicture: "../../assets/images/blog-images/blog_image (3).png",
      blogName: "The Importance of Preventive Care",
      blogContent: "" // Content will be loaded dynamically from Word file
    },
    {
      blogPicture: "../../assets/images/blog-images/blog_image (4).png",
      blogName: "Decoding Pet Behavior",
      blogContent: "" // Content will be loaded dynamically from Word file
    }
  ];

  
  ngOnInit(): void {
    this.blogs.forEach(blog => {
      this.loadContentFromWordFile(blog);
    });
  }

  redirectToBlog(blog: any) {
    this.router.navigate(['/blog'], { state: { blogData: blog } });
  }

  loadContentFromWordFile(blog: { blogPicture: string, blogName: string, blogContent: string }) {
    // Load content from Word file
    fetch(`../../assets/blogs/${blog.blogName}.docx`)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        // Convert Word content to HTML
        mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
          .then((result: { value: string }) => {
            // Update the blog content
            blog.blogContent = result.value;
          })
          .catch((err: any) => {
            console.error(`Error converting Word to HTML for ${blog.blogName}:`, err);
          });
      })
      .catch(error => {
        console.error(`Error fetching Word file for ${blog.blogName}:`, error);
      });
  }

  getFirstParagraph(content: string): SafeHtml {
    // Use regex to extract the first paragraph
    const firstParagraphMatch = content.match(/<p>.*?<\/p>/);
    const firstParagraph = firstParagraphMatch ? firstParagraphMatch[0] : '';

    // Sanitize the first paragraph to prevent XSS attacks
    return this.sanitizer.bypassSecurityTrustHtml(firstParagraph);
  }
}
