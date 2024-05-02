import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IOffer } from '../../models/offer';
import { OfferService } from '../../services/offer.service';
import { off } from 'process';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../models/category';
import { IAdress } from '../../models/adress';
import { Subscription, scan } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements OnInit, OnDestroy{
  dormitories?: IAdress[]; 
  category?: ICategory;
  offers?: IOffer[];
  overalAmount?: number;
  offerService = inject(OfferService);
  minPrice: number|null = null;
  maxPrice: number|null = null;
  categoryId: string|null = "";

  photo?:any;

  private activateRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private subs: Subscription;

  constructor(){
    this.subs = this.activateRoute.paramMap.subscribe(params => {
      this.categoryId = params.get("categoryId");
      this.offerService.getCategoryById(this.categoryId).then((category) => {
        this.category = category;
      })
    })
  }

  ngOnInit(){
    this.getOffers();
    this.offerService.getDormitories().then((dormitories) => { // Общежития будут статично хранится в приложении
      this.dormitories = dormitories;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async getOffers(){
    await this.offerService.getOffers().then(
      response => {
        this.overalAmount = response.overallAmount;
        this.offers = response.offers;
      }
    );
  }

  categoryClick(category:ICategory){
    //this.router.navigate([`search/${category.categoryId}`])
    console.log(this.photo)
  }
}