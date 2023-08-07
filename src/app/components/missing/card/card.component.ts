import { Component ,Input} from '@angular/core';
import { MissingPerson } from 'src/app/models/missing';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() missing?:MissingPerson
  onClick():void{
    console.log("clicked");
    
  }
  getUrl():string{
    return "https://randomuser.me/api/portraits/men/"+this.missing?.url.toString()+".jpg"
  }
}
