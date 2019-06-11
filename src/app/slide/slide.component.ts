import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  template: `
    <div class="card__image">
      <img  [src]='card.slide[contatore]' [alt]="'foto ' + card.slide[contatore]">
      <div class="card__btn" >
        <div class="card__btn--left" (click)="indietro()">
          INDIETRO"
        </div>
        <div class="card__btn--right" (click)="avanti_2($event)">
          AVANTI
        </div>
      </div>
    </div>
  `
})
export class SlideComponent {


}