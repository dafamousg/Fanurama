import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Character} from '../../../Models/Character';
import {FuturamaAPIService} from '../../../services/futurama-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters:Character[];
  subscription:Subscription;
  searchText:string;

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  async getCharacters(): Promise<void> {
    const loadingSpan = document.getElementById("loading");
    
    this.characters = await this.futuramaServices.combinedObservable()
    .then((data:Character[]) => {
    
      data.forEach((character:Character) => {
        character.Id = UUID.UUID();
      });
      
      console.log(data);
      loadingSpan.style.display = "none";
    
      return data;
    });
  }


  filterByName() {
    return this.characters;
  }

  sortBy() {
    this.characters.sort((a, b) => a.Name > b.Name ? 1 : a.Name === b.Name ? 0 : -1);
  }

  reverse() {
    this.characters.reverse();
  }

  ngOnDestroy() {
  }
}