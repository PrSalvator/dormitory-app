import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchComponent } from './components/search/search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SelectComponent } from './components/select/select.component';
import { SliderModule } from 'primeng/slider';
import { SliderComponent } from './components/slider/slider.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { CardComponent } from './components/card/card.component';
import { RankPipe } from './pipes/rank.pipe';
import { SellerCardComponent } from './components/seller-card/seller-card.component';
import { RatingModule } from 'primeng/rating';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { SkeletonModule } from 'primeng/skeleton';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { FeedBackComponent } from './components/feed-back/feed-back.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { authInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PaginatorPageComponent } from './components/paginator/paginator-page/paginator-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SearchComponent,
    SelectComponent,
    SliderComponent,
    CheckBoxComponent,
    GalleriaComponent,
    CardComponent,
    RankPipe,
    SellerCardComponent,
    CarouselComponent,
    ProductPageComponent,
    NotfoundPageComponent,
    FeedBackComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    LoginComponent,
    PaginatorComponent,
    PaginatorPageComponent,
    SearchPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    GalleriaModule,
    RatingModule,
    CarouselModule,
    HttpClientModule,
    SkeletonModule 
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

