import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { ItemsService } from './items.service';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CardsComponent, CardComponent, SlideComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemsService]
})
export class AppModule { }
