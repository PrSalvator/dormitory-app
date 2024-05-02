import { Component, ElementRef, Input, OnInit, ViewChild, afterNextRender } from '@angular/core';
import { DeferBlockBehavior } from '@angular/core/testing';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnInit{
  @Input() totalRecords = 1;
  @Input() totalOnOnePage = 1;

  @ViewChild("container", {static: false}) container?: ElementRef;

  lastPage = 1;
  displayedPageCount = 4;
  first = 1;
  pages: number[] = [];

  onPageChange(){
    this.first += this.displayedPageCount;
  }

  constructor(){
    afterNextRender(() => {
      let elem = this.container?.nativeElement as HTMLElement;
      this.addClass(elem.childNodes[0] as HTMLElement);
    })
  }

  ngOnInit(): void {
    if(this.totalRecords <= 0) this.totalRecords = 1;
    if(this.totalOnOnePage <= 0) this.totalOnOnePage = 1;

    this.lastPage = Math.ceil(this.totalRecords/this.totalOnOnePage);

    this.fillPages();
  }


  fillPages(){
    this.pages = [];
    const lastDisplayed = this.first + this.displayedPageCount;

    if( lastDisplayed < this.lastPage){
      for(let i = this.first; i < lastDisplayed; i++) this.pages.push(i);
      return;
    }

    let i = this.first;
    while(i <= this.lastPage){ 
      this.pages.push(i);
      i++;
    }
  }

  scrollRight(){
    this.first += this.displayedPageCount;
    this.fillPages();
  }

  scrollLeft(){
    const dif = this.first - this.displayedPageCount;
    if(dif > 0){
      this.first = dif;
      this.fillPages();
      return;
    } 
    this.first = 1;
    this.fillPages();
  }

  lastPageClick(){
    this.first = this.lastPage - this.displayedPageCount;
    this.fillPages();

    setTimeout(() => {
      let c = this.container?.nativeElement as HTMLElement;
      let page = c.childNodes[this.displayedPageCount] as HTMLElement;
      page.classList.add("selected");
    }, 25)
  }

  pageClick(event:Event){
    let page = event.target as HTMLElement;
    this.addClass(page);
  }

  addClass(page: HTMLElement){
    let elem = this.container?.nativeElement as HTMLElement;
    elem.childNodes.forEach(e => {
      let el = e as HTMLElement;
      el.classList?.remove("selected");
    })
    page.classList.add("selected");
  }
}
