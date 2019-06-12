import { Component } from '@angular/core';
import {ItemsService} from '../items.service';



@Component({
  selector: 'app-slide',
  template: `
    <div class="card" *ngFor="let card of itemsService.cards">

      <!-- <app-slide-image [cardImage]></app-slide-image> -->

      <div class="card__image">
        <img [src]='card.foto' [alt]="'foto ' + card.titolo" >
      </div>

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