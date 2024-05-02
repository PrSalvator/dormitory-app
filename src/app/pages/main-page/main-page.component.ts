import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../models/category';
import { OfferService } from '../../services/offer.service';
import { response } from 'express';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  categories?: ICategory[];

  private offerService = inject(OfferService);
  private router = inject(Router)

  ngOnInit(){
    this.offerService.getMainCategories().then( (categories) =>{
      this.categories = categories;
    }
    );
  }

  categoryClick(category:ICategory){
    this.router.navigate([`search/${category.categoryId}`]);
  }

}
