import { Injectable } from '@angular/core';
import {Items} from './items';
@Injectable()
export class ItemsService {
pathGithub = 'https://github.com/hypnosdesign/angular-ldps5d/raw/master/src/'

cards: Items[] = [
    {
      id: 1,
      titolo: 'card numero uno',
      sotto_titolo: 'sotto titolo card numero uno',
      descrizione: `Questa è una descrizione per la card numero uno`,
      foto: this.pathGithub +'assets/card-img-1.jpg',
      slide: [
        this.pathGithub +'assets/card-img-1.jpg',
        this.pathGithub +'assets/card-img-2.jpg',
        this.pathGithub +'assets/card-img-3.jpg',
        this.pathGithub +'assets/card-img-4.jpg',
        this.pathGithub +'assets/card-img-5.jpg',
        this.pathGithub +'assets/card-img-6.jpg'
      ]
    },
    {
      id: 2,
      titolo: 'card numero due',
      sotto_titolo: 'sotto titolo card numero due',
      descrizione: `Questa è una descrizione per la card numero due`,
      foto: this.pathGithub +'assets/card-img-7.jpg'
    },
    {
      id: 3,
      titolo: 'card numero tre',
      sotto_titolo: 'sotto titolo card numero tre',
      descrizione: `Questa è una descrizione per la card numero tre`,
      foto: this.pathGithub +'assets/card-img-9.jpg',
      slide: [
        this.pathGithub +'assets/card-img-9.jpg',
        this.pathGithub +'assets/card-img-10.jpg',
        this.pathGithub +'assets/card-img-11.jpg'
      ]
    },
    {
      id: 1,
      titolo: 'card numero quattro',
      sotto_titolo: 'sotto titolo card numero quattro',
      descrizione: `Questa è una descrizione per la card numero quattro`,
      foto: this.pathGithub +'assets/card-img-8.jpg'
    }

  ];

}