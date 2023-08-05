import { Component } from '@angular/core';
import { MissingPerson } from 'src/app/models/missing';

@Component({
  selector: 'app-missing-list',
  templateUrl: './missing-list.component.html',
  styleUrls: ['./missing-list.component.css']
})
export class MissingListComponent {
  missing_persons:MissingPerson[]=[
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
    {name:"Nahian",age:29},
  ]

  openAddDialogue():void{
    
  }

}
