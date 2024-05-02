import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator-page',
  templateUrl: './paginator-page.component.html',
  styleUrl: './paginator-page.component.css'
})
export class PaginatorPageComponent {
  @Input() label?: string;
}
