import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
//Вероятнее всего сюда будет передоваться json с информацией о товаре и продавце
export class CardComponent {
  @Input() src:string = '/../../../assets/no-image.svg';
  @Input() title:string = 'Без названия';
  @Input() price:string = '0';
  @Input() address:string = 'Адрес неизвестен';
  @Input() rating:string = '0';
  @Input() name:string = '';
  isVavorite:boolean = false;

  click(){
    this.isVavorite = !this.isVavorite;
  }
}
