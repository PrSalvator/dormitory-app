import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './services/auth.guard';
import { SearchComponent } from './components/search/search.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "product", component: ProductPageComponent, canActivate: [authGuard]},
  {path: "search/:categoryId", component: SearchPageComponent},
  {path: "", component: MainPageComponent},
  {path: "**", component: NotfoundPageComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
