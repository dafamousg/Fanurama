import { Component, OnInit } from '@angular/core';
import {Character} from '../../../Models/Character';
import {FuturamaAPIService} from '../../../services/futurama-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters:Character[];

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.futuramaServices.getAllCharacters().subscribe(characters => {
      this.characters = characters;      
    });
  }

}
