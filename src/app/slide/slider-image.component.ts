import { Component, Input, Output, EventEmitter} from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-slider-image',
  template: `
      <img  [src]='images[contatore]' [alt]="'foto ' + text">
      <div class="card__btn" >
        <div class="card__btn--left" (click)="indietro()">
          INDIETRO
        </div>
        <div class="card__btn--right" (click)="avanti()">
          AVANTI
        </div>
      </div>
  `
})
export class SliderImageComponent {
  @Input() images = this.itemsService.cards.slide;
  @Input() text = this.itemsService.cards.titolo;
  contatore: number;

  
  constructor(public itemsService: ItemsService){
    this.contatore = 0;
    }
  avanti(){
    if (this.contatore >= this.images.length -1) {
      this.contatore = 0;
    
    } else {
      this.contatore += 1;
    }
  }
 indietro(){
    if (this.contatore <= 0) {
      this.contatore = this.images.length - 1;
    } else {
      this.contatore -= 1;
    }
  }


}