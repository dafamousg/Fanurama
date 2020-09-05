import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/Models/Character';
import { FuturamaAPIService } from '../../services/futurama-api.service';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit {

  @Input() character:Character;

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    console.log("Character Item");
  }

  setClasses() {
    let classes = {
      character:true
    }
    return classes;
  }

}
