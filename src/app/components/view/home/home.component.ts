import { Component, HostListener, OnInit } from '@angular/core';
import {Serie} from '../../../Models/Serie';
import {FuturamaAPIService} from '../../../services/futurama-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serie:Serie;
  
  
  constructor(private futuramaServices:FuturamaAPIService) {  }
  
  ngOnInit(): void {
    //Retrieves serie Info
    this.futuramaServices.getSeriesInfo().subscribe(info => {
      info.map(i => this.serie = i);
    });
  }

  //Scroll animation Spaceship
  @HostListener('window:scroll', ['$event'])
  scrollAnimation(){
    let ss = document.getElementById("ss");
    
    var value = window.scrollY;
    ss.style.left = (value * 2 ) + 'px';
  }


}
