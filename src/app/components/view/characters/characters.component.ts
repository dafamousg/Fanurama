import { Component, OnInit } from '@angular/core';
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

  getCharacters(){
    this.subscription = this.futuramaServices.combinedObservable().subscribe(characters => {
      this.characters = characters.sort((a, b) => a.Name.localeCompare(b.Name));;
      console.log(characters);
    });
  }


  filterByName(){
    return this.characters;
  }

  sortBy(prop: string) {
    return this.characters.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  reverse(){
    this.characters.reverse();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}