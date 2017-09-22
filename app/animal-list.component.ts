
import {Component, Input} from '@angular/core';
import{ Animal } from './animal.model';


@Component({
  selector:'animal-list',
  template:`
  <div class="well">
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimaList | funBeers:funBeerInput">

    </div>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];

}
