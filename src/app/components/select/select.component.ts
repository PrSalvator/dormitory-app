import { Component, ElementRef, Input, ViewChild } from '@angular/core';

interface Item{
  label: string;
  state: boolean;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input() values: string[] = [];

  @ViewChild("selectTitle", {static: false}) private selectTitle: ElementRef|undefined;
  @ViewChild("select", {static: false}) private select: ElementRef|undefined;

  selectTitleClick(){
    if(this.select?.nativeElement.getAttribute('data-state') === 'active'){
      this.select?.nativeElement.setAttribute('data-state', '');
    }
    else{
      this.select?.nativeElement.setAttribute('data-state', 'active');
    }
  }

  labelClick(e:any){
    this.selectTitle!.nativeElement.textContent = e.target.textContent;
    this.select?.nativeElement.setAttribute('data-state', '');
    console.log("a");
  }
}