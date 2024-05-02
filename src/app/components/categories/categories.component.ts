import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ICategory } from '../../models/category';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @ViewChild("container", {static: false}) container: ElementRef|undefined;
  currentCategory: ICategory|null = null;
  @Input() categories: ICategory[]|null = null;

  onMouseEnter(category: ICategory, e: Event){
    this.currentCategory = category;
    let container = this.container?.nativeElement as HTMLElement;
    container.childNodes.forEach( elem => {
      let e = elem as HTMLElement;
      e.classList?.remove("active");
    });
    let target = e.target as HTMLElement;
    target?.classList.add("active");
  }
}
