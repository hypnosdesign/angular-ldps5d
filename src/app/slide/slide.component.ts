import { Component, Input, Output } from '@angular/core';
import {Items} from '../items';
import {EventEmitter} from '@angular/core'


@Component({
  selector: 'app-slide',
  template: `
    
        <div class="card__image" *ngFor='let slide of slides'>
          <img  *ngIf='slide.slide' [src]='slide.slide[contatore]' [alt]="'foto ' + slide.slide[contatore]">
          <div class="card__btn" >
            <div class="card__btn--left" (click)="indietro()">
              INDIETRO
            </div>
            <div class="card__btn--right" (click)="avantiHandler($event)">
              AVANTI
            </div>
          </div>
        </div>
  `
})
export class SlideComponent {
@Input() slides: Items[];
@Output() avanti: EventEmitter<any> = new EventEmitter();

avantiHandler(event) {
  this.avanti.emit(event);
}
}