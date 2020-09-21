import { Component, OnInit } from '@angular/core';
import {Character} from '../../../Models/Character';
import {FuturamaAPIService} from '../../../services/futurama-api.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters:Character[];
  page:number = 1;
  currentPage:number;
  btnPrev = <HTMLInputElement> document.getElementById("btnPrev");


  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.GetCharacterByPage(this.page);
  }


  GetCharacterByPage(page:number){
    this.futuramaServices.getAllCharacters(page).subscribe(characters => {
      this.characters = characters;      
    });
    this.currentPage = page;
  }

  buttonNext(page:number):void{
    if(page < 21){
      this.GetCharacterByPage(++page);
    }
  }

  buttonPrev(page:number):void{
    if(page > 1)
      this.GetCharacterByPage(--page);
    else
      this.btnPrev.disabled = true;
  }

}
