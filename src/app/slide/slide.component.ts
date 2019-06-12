import { Component, Input } from '@angular/core';
import {Items} from '../items';
import {ItemsService} from '../items.service'

@Component({
  selector: 'app-slide',
  template: `
    <div class="card" *ngFor="let card of cards">
      <div class="card__image" *ngIf="!card.slide; else slides" >
        <img [src]='card.foto' [alt]="'foto ' + card.titolo" >
      </div>
      <ng-template #slides>
        <div class="card__image">
          <img  [src]='card.slide[contatore]' [alt]="'foto ' + card.slide[contatore]">
          <div class="card__btn" >
            <div class="card__btn--left" (click)="indietro()">
              INDIETRO
            </div>
            <div class="card__btn--right" (click)="avanti_2($event)">
              AVANTI
            </div>
          </div>
        </div>
      </ng-template>
      
      <div class="card__text">
        <h1 [innerHtml]='card.titolo'></h1>
        <h2 [innerHtml]='card.sotto_titolo'></h2>
        <p [innerHtml]='card.descrizione'></p>
      </div>
    </div>
  `
})
export class SlideComponent {
@Input() items: Items[];
}