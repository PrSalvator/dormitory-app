import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-card',
  templateUrl: './seller-card.component.html',
  styleUrl: './seller-card.component.css'
})
export class SellerCardComponent implements OnInit{
  @Input() rating: number = 0;
  @Input() feedBackCount: number = 0;
  @Input() src = '';
  @Input() name = '';
  @Input() surname = '';
  @Input() date:Date = new Date();
  @Input() skeleton:boolean = false;
  feedBack: string = ''; 


  ngOnInit(): void {
   this.feedBack = this.getNoun(this.feedBackCount, "отзыв", "отзыва", "отзывов");
  }

  getNoun(number: number, one:string, two:string, five:string) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }
}
