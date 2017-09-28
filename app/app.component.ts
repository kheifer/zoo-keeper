import { Component } from '@angular/core';
import { Animal } from './animal.model';
import {AnimalListComponent} from './animal-list.component';
import {NewAnimalComponent} from './new-animal.component';
import {EditAnimalComponent} from './edit-animal.component';


@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">Zoo-Keep</a>
    </div>
  </div>
</nav>
  <div class="container main">
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <hr>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
      new Animal("Arctic Fox", "Moon", 2, "Carnivore","Northern Trail",5,"Female","Cool shade","Loud noises"),
      new Animal("Ocelot","Prince",4,"Carnivore","Tropical Rain Forest Building",6 ,"Male","Laying in the sunshine", "Toys that are not rope-based"),
      new Animal("Northwest Black Tailed Deer","Tinkerbell",8,
"Herbivore","Northern Trail",2,"Female","Delicate roots and leaves","Loud Noises")];
    selectedAnimal: Animal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
