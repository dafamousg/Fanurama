import { Component, HostListener, OnInit } from '@angular/core';
import {Serie} from '../../../Models/Serie';
import {FuturamaAPIService} from '../../../services/futurama-api.service';
import { map } from 'rxjs/operators';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serie:Serie;
  
  
  constructor(private futuramaServices:FuturamaAPIService, private scrollDispatcher: ScrollDispatcher) {  }
  
  ngOnInit(): void {

    this.futuramaServices.getSeriesInfo().subscribe(info => {
      info.map(i => this.serie = i);
    });
  }

  @HostListener('window:scroll', ['$event'])
    


  scrollAnimation(event){
    console.log("this is scroll..");
    let ss = document.getElementById("ss");
    
    var value = window.scrollY;
    
    
    
    ss.style.right = -value + 0.5 + 'px';
    

  }


}
