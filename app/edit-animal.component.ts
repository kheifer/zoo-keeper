import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal" id="edit" class="well">
        <label>Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species" class="form-control">
        <label>Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name" class="form-control">
        <label>Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" class="form-control" type='number'>
        <label>Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet" class="form-control">
        <label>Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location" class="form-control">
        <label>Number of needed caretakers, :</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" type="number" class="form-control">
        <label>Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex" class="form-control">
        <label>Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes" class="form-control">
        <label>Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes" class="form-control">
        <button clas="btn btn-info" (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
