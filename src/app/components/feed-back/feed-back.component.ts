import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.css'
})
export class FeedBackComponent {
  @Input() skeleton:boolean = false;
}
