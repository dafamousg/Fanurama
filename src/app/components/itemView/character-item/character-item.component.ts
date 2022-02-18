import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Character } from 'src/app/Models/Character';
import { FuturamaAPIService } from '../../../services/futurama-api.service';


@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss']
})
export class CharacterItemComponent implements OnInit, AfterViewInit {

  @Input() character:Character;

  constructor(private futuramaServices:FuturamaAPIService) { }

	ngOnInit(): void {
  	}

	ngAfterViewInit(): void {
		const imgDiv = document.getElementById(this.character.Id);

		imgDiv.style.backgroundImage = `url(${this.character.PicUrl})`;
	}

	setClasses() {
		let classes = {
			character:true
		}
		return classes;
	}

}
