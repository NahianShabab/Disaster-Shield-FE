
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  // @Input() post: Post; // Assuming the post object has properties like title, date, content, and tags
  post:Post={
    poster_name: 'John Doe',
    title: 'Sample Post',
    content: 'This is the content of the post...',
    tags: ['angular', 'tutorial', 'example'],
    date: new Date()
  };
  
  onComment() {
    // Implement the logic for the comment button
    console.log('Comment button clicked!');
  }

  onShare() {
    // Implement the logic for the share button
    console.log('Share button clicked!');
  }

  onReport() {
    // Implement the logic for the report button
    console.log('Report button clicked!');
  }
}
