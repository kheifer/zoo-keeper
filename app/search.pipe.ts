import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "search",
  pure: false
})


export class SearchPipe implements PipeTransform {
  transform(input: Animal[], animalAgeSort){
  let output: Animal[] = [];
    if(animalAgeSort === "younger") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animalAgeSort === "older") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age  > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
