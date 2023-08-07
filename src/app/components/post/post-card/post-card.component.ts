
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  // @Input() post: Post; // Assuming the post object has properties like title, date, content, and tags
  @Input() post:Post={
    poster_name: "John Doe",
    title: "Dealing with Cyclone Emergencies",
    content: "Living in a cyclone-prone region can be challenging. Here are some tips on how to prepare for and respond to cyclone emergencies.",
    tags: ["cyclone", "disaster", "emergency", "safety"],
    date: Date.now(),
    volunteerCollected:10,
    volunteerTotal:20,
    url:20
  } 
  
  onComment() {
    // Implement the logic for the comment button
    console.log('Comment button clicked!');
    console.log(100*(this.post.volunteerCollected/this.post.volunteerTotal));
  }

  onShare() {
    // Implement the logic for the share button
    console.log('Share button clicked!');
  }

  onReport() {
    // Implement the logic for the report button
    console.log('Report button clicked!');
  }
  getVol():number{
    
    return 100*(this.post.volunteerCollected/this.post.volunteerTotal) 
  }

  getUrl():string{
    return "https://randomuser.me/api/portraits/men/"+this.post.url.toString()+".jpg"
  }
}
