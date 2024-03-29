import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.css'
})
export class CheckBoxComponent {
  @Input() label:string = "";
  @Input() value:any;
}
