import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  values:string[] = [
    "Вершинина 46",
    "Вершинина 39",
    "Кирова 2",
    "Вершинина 48"
  ]
}
