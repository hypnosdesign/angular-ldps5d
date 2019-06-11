import { Component, Input } from '@angular/core';
import {Items} from '../items';

@Component({
  selector: 'app-card',
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
export class CardComponent {
  @Input() cards: Items[];
  contatore = 0;

  avanti() {
    const slide = this.cards[0].slide;
    if (this.contatore >= slide.length - 1) {
      this.contatore = 0;
    } else {
      this.contatore += 1;
    }
  }

  indietro() {
    const slide = this.cards[0].slide;
    if (this.contatore <= 0) {
      this.contatore = slide.length - 1;
    } else {
      this.contatore -= 1;
    }
  }


  //*** PROVA METODO CON BIND DELL'EVENTO */

  avanti_2(event) {
    let titleHtml = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.card__text h1').textContent.toLowerCase();

    const slide = this.cards;
    slide.filter((item) => item.slide).forEach((item,i) => {
      let titleJson = item.titolo.toLowerCase();
      if(titleHtml === titleJson){
        console.log(item.titolo.toLowerCase(), i, item.slide);
        if (this.contatore >= item.slide.length - 1) {
          this.contatore = 0;
        } else {
          this.contatore += 1;
        }
        console.log(contatore);
      }
    }) 
    }

}