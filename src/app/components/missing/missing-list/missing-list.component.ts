import { Component } from '@angular/core';
import { MissingPerson } from 'src/app/models/missing';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.component.html',
  styleUrls: ['./missing-list.component.css']
})
export class MissingListComponent {
  missing_persons:MissingPerson[]=[
    { name: "John", age: 30, url: 12 },
  { name: "Michael", age: 25, url: 45 },
  { name: "David", age: 22, url: 3 },
  { name: "James", age: 40, url: 60 },
  { name: "William", age: 28, url: 22 },
  { name: "Robert", age: 32, url: 11 },
  { name: "Daniel", age: 37, url: 5 },
  { name: "Matthew", age: 19, url: 30 },
  { name: "Joseph", age: 48, url: 71 },
  { name: "Andrew", age: 34, url: 2 },
  { name: "Ryan", age: 29, url: 13 },
  { name: "Christopher", age: 39, url: 64 },
  { name: "Brian", age: 27, url: 17 },
  { name: "Jason", age: 33, url: 38 },
  { name: "Kevin", age: 41, url: 19 },
  { name: "Mark", age: 26, url: 51 },
  { name: "Thomas", age: 35, url: 33 },
  { name: "Nicholas", age: 43, url: 44 },
  { name: "Jonathan", age: 31, url: 55 },
  { name: "Anthony", age: 20, url: 8 },
  { name: "Justin", age: 44, url: 29 },
  { name: "Brandon", age: 36, url: 70 },
  { name: "Benjamin", age: 21, url: 16 },
  { name: "Samuel", age: 46, url: 7 },
  { name: "Patrick", age: 23, url: 58 },
  { name: "Charles", age: 38, url: 25 },
  { name: "Adam", age: 42, url: 37 },
  { name: "Scott", age: 24, url: 49 },
  { name: "Stephen", age: 47, url: 1 },
  { name: "Timothy", age: 32, url: 68 }
  ]

  openAddDialogue():void{
    
  }

}
