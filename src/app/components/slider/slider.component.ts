import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent{
  values:number[] = [254, 690];
  @Input() min: any = null;
  @Input() max:any = null;

  onChange(){
    this.min = this.values[0];
    this.max = this.values[1];
  }

  numericInput(e:any){
    const regex = /[^0-9]/g;
    e.target.value = e.target.value.replace(regex, "");
  }
}
