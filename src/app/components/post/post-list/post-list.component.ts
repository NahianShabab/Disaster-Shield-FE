import { Component } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: Post[] = [
    {
      poster_name: "Jane Smith",
      title: "Surviving Hurricane Season",
      content: "Hurricanes can be devastating. Here are essential tips to stay safe and prepared during the hurricane season.",
      tags: ["hurricane", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 15,
      volunteerTotal: 25,
      url: 25
      },
      
      {
      poster_name: "David Johnson",
      title: "Earthquake Preparedness Guide",
      content: "Living in an earthquake-prone area requires proactive preparation. Learn how to safeguard yourself and your community.",
      tags: ["earthquake", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 8,
      volunteerTotal: 30,
      url: 18
      },
      
      {
      poster_name: "Sarah Lee",
      title: "Tornado Safety Tips",
      content: "Tornadoes can strike suddenly and violently. Here are crucial safety measures to follow when tornadoes threaten your area.",
      tags: ["tornado", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 12,
      volunteerTotal: 22,
      url: 15
      },
      
      {
      poster_name: "Michael Brown",
      title: "Wildfire Preparedness and Evacuation",
      content: "Wildfires are a significant risk in many regions. Know how to prepare for wildfires and evacuate safely when necessary.",
      tags: ["wildfire", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 20,
      volunteerTotal: 40,
      url: 30
      },
      
      {
      poster_name: "Emily Wilson",
      title: "Flood Awareness and Safety",
      content: "Flooding can cause widespread damage. Learn about flood awareness and essential safety measures to protect your family and property.",
      tags: ["flood", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 5,
      volunteerTotal: 15,
      url: 10
      },
      
      {
      poster_name: "Robert Anderson",
      title: "Winter Storm Preparedness",
      content: "Winter storms can be harsh and dangerous. Here's a guide to prepare for extreme winter weather and keep your loved ones safe.",
      tags: ["winter storm", "disaster", "emergency", "safety"],
      date: Date.now(),
      volunteerCollected: 6,
      volunteerTotal: 12,
      url: 8
      },
      
      {
      poster_name: "Karen Evans",
      title: "Preventing Heat-Related Illnesses",
      content: "High temperatures can lead to heat-related illnesses. Know how to prevent and recognize these conditions during hot weather.",
      tags: ["heat", "safety", "health", "emergency"],
      date: Date.now(),
      volunteerCollected: 18,
      volunteerTotal: 25,
      url: 20
      },
      
      {
      poster_name: "Daniel Martinez",
      title: "Preparing for Power Outages",
      content: "Power outages can happen unexpectedly. Learn how to prepare for and cope with power outages to minimize disruptions.",
      tags: ["power outage", "emergency", "preparation", "safety"],
      date: Date.now(),
      volunteerCollected: 10,
      volunteerTotal: 18,
      url: 15
      },
      
      {
      poster_name: "Laura Thompson",
      title: "Preparing Your Home for Emergencies",
      content: "Your home should be a safe haven during emergencies. Discover essential steps to make your home more disaster-resistant.",
      tags: ["home safety", "emergency preparedness", "disaster", "safety"],
      date: Date.now(),
      volunteerCollected: 4,
      volunteerTotal: 10,
      url: 5
      },
      
      {
      poster_name: "William Clark",
      title: "First Aid Essentials for Emergency Situations",
      content: "Knowing basic first aid can save lives during emergencies. Familiarize yourself with essential first aid techniques and supplies.",
      tags: ["first aid", "emergency", "health", "safety"],
      date: Date.now(),
      volunteerCollected: 22,
      volunteerTotal: 30,
      url: 25
      }
    ];
}
