import { Component, Input} from '@angular/core';
import { IUser } from '../../models/user';
import { IOffer } from '../../models/offer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
//Вероятнее всего сюда будет передоваться json с информацией о товаре и продавце
export class CardComponent {
  @Input() offer?: IOffer;
  @Input() skeleton:boolean = false;
  isVavorite:boolean = false;

  click(){
    this.isVavorite = !this.isVavorite;
  }
}
