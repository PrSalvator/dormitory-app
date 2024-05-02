import { Component, Input } from '@angular/core';
import { ICategory } from '../../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  @Input() category?: ICategory;;
}
