import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div *ngIf="!showNewAnimalForm">
   <button class="btn btn-info" (click)="newAnimalButtonClicked()">Add a New Animal</button>
 </div>
  <div class="hidden-pane form-group well" id='hidden' *ngIf="showNewAnimalForm">
  <label>Species:</label>
  <input #newSpecies class="form-control">
  <label>Name:</label>
  <input #newName class="form-control">
  <label>Age:</label>
  <input #newAge class="form-control" type='number'>
  <label>Diet:</label>
  <input #newDiet class="form-control">
  <label>Location:</label>
  <input #newLocation class="form-control">
  <label>Number of needed caretakers, :</label>
  <input #newCaretakers type="number" class="form-control">
  <label>Sex:</label>
  <input #newSex class="form-control">
  <label>Likes:</label>
  <input #newLikes class="form-control">
  <label>Dislikes:</label>
  <input #newDislikes class="form-control">
  <button class="btn btn-info" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Add</button>
  <button class="btn btn-warning" (click)="closeAnimalButtonClicked()">Cancel</button></div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  showNewAnimalForm: boolean;

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let trimName = name.trim();
    let trimLikes = dislikes.trim();
    let trimLocation = location.trim();
    if(trimName.length <= 0||trimLikes.length<= 0|| trimLocation.length <= 0){
      alert("Please fill out all fields");
    }else{
      let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes,dislikes);
      this.newAnimalSender.emit(newAnimalToAdd);
      this.showNewAnimalForm = false;
    }
  }

  newAnimalButtonClicked(){
     this.showNewAnimalForm = true;
  }
  closeAnimalButtonClicked(){
     this.showNewAnimalForm = false;
  }
}
