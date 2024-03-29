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
    RankPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SliderModule,
    GalleriaModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

