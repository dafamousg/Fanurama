import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../Models/Character';

@Pipe({
  name: 'notCharacters'
})
export class NotCharactersPipe implements PipeTransform {

  character:Character[];

  transform(character:Character[]): any {
    if (!character) {
        return character;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return character.filter(item => item.name);
}

}
