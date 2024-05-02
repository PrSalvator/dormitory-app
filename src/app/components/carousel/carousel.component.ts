import { Component, Input, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { ICategory } from '../../models/category';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent{
  @Input() categories?: ICategory[]|any;
  @Input() skeleton: boolean = false;
  @Output() onClick = new EventEmitter<ICategory>();

  categoryClick(category: ICategory){
    this.onClick.emit(category);
  }
}
