import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {

  transform(input: Animal[], animalDiet) {
    var output: Animal[] = [];
    if (animalDiet  === "carnivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet.toLowerCase() === "carnivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else if (animalDiet === "herbivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet.toLowerCase() === "herbivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else if (animalDiet === "omnivores") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].diet.toLowerCase() === "omnivore"){
            output.push(input[i]);
          }
        }
      return output;
    } else {
      return input;
    }
  }
}
