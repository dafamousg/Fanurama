import { Component, OnInit } from '@angular/core';
import {Character} from '../../Models/Character';
import {FuturamaAPIService} from '../../services/futurama-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters:Character[];

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.futuramaServices.getAllCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

}
