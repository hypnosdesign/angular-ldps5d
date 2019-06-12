import { Component, Input} from '@angular/core';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-slide-image',
  template: `
  <div class="card__image">
        <img [src]='cardImage.foto' [alt]="'foto ' + cardImage.titolo" >
  </div>
  `
})
export class SlideImageComponent {
@Input() cardImage = this.itemsService.cards;
constructor(public itemsService: ItemsService){}
}