import { Component} from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-cards',
  template: `
  <app-card [cards]="itemsService.cards"></app-card>
  `
})
export class CardsComponent {
constructor(public itemsService: ItemsService) { }
}