import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsService } from './items.service';
import { SlideComponent } from './slide/slide.component';
import { SlideImageComponent } from './slide/slide-image.component';
import { SliderImageComponent } from './slide/slider-image.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SlideComponent, SlideImageComponent, SliderImageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ItemsService]
})
export class AppModule { }
