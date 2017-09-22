import { Component } from '@angular/core';
import { Animal } from './animal.model';
import {AnimalListComponent} from './animal-list.component';
import {NewAnimalComponent} from './new-animal.component';
import {EditAnimalComponent} from './edit-animal.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  currentZoo: string = 'Ab-Zoo-lutely';
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
