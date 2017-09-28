
import {Component, Input,Output, EventEmitter} from '@angular/core';
import{ Animal } from './animal.model';


@Component({
  selector:'animal-list',
  template:`
  <div class="well">
  <label>Sort Animals:</label>
      <select class="form-control" (change)="onChange($event.target.value)">
        <option selected="selected" value="all">All Animals</option>
        <option value="younger">Younger Animals(under 2 years old)</option>
        <option value="older">Older Animals(over 2 years old)</option>
      </select>
      <hr>
    <div class="panel panel-default" *ngFor="let currentAnimal of childAnimalList | search:filterByAge">
    <div class="panel-heading">Animal name: {{currentAnimal.name}}</div>
      <div class="panel-body">
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Age: {{currentAnimal.age}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Zoo location: {{currentAnimal.location}}</li>
          <li>Caretakers: {{currentAnimal.caretakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>Likes: {{currentAnimal.likes}}</li>
          <li>Dislikes: {{currentAnimal.dislikes}}</li>
        </ul>
        <a href="#edit"><button type="button" class="btn btn-default floater" (click)="editAnimalClicked(currentAnimal)">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
        </button></a>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "all";

  editAnimalClicked(clickedAnimal: Animal){
      this.clickSender.emit(clickedAnimal);
    }

  onChange(option){
    this.filterByAge = option;
  }
}
