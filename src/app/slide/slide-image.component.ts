import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-slide-image',
  template: `

        <img [src]='cardImage' [alt]="'foto ' + cardTitolo">
  
  `
})
export class SlideImageComponent {
@Input() cardImage: string;
@Input() cardTitolo: string;

}