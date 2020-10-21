import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../Models/Character';

@Pipe({
  name: 'notCharacters'
})
export class NotCharactersPipe implements PipeTransform {


  transform(characters:Character[], searchText:string): any {
    if (!characters) {
        return [];
    }
    if (!searchText){
      return characters;
    }

    searchText = searchText.toLocaleLowerCase();

    return characters.filter(character => {
      return character.Name.toLocaleLowerCase().includes(searchText);
    })
}

}
