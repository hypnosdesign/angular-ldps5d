import { Component } from '@angular/core';
import {ItemsService} from '../items.service';



@Component({
  selector: 'app-slide',
  template: `
    <div class="card" *ngFor="let card of itemsService.cards">

      <app-slide-image 
        *ngIf='!card.slide'
        class="card__image" 
        [cardImage]='card.foto' 
        [cardTitolo]='card.titolo'
      ></app-slide-image>

      <app-slider-image
        *ngIf='card.slide'
        class="card__image"
        [images]='card.slide'
        [text]='card.titolo'
        (next)='vaiavanti(event)'
        (prev)='vaiindietro(event)'
      ></app-slider-image>

      <div class="card__text">
        <h1 [innerHtml]='card.titolo'></h1>
        <h2 [innerHtml]='card.sotto_titolo'></h2>
        <p [innerHtml]='card.descrizione'></p>
      </div>
    </div>
  `
})
export class SlideComponent {
  constructor(public itemsService: ItemsService){}
}