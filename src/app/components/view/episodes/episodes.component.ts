import { Component, OnInit } from '@angular/core';
import {Episode} from '../../../Models/Episode';
import {FuturamaAPIService} from '../../../services/futurama-api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodes:Episode[];
  descSelected:boolean = false;

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.futuramaServices.getAllEpisodes().subscribe(ep => {
      this.episodes = ep;
      for(var x in this.episodes){
        if(parseInt(x) < 13){
          //console.log(x);
        }
        
      }     
    })
  }

  //Shows episode description on top of page in div element (id = desc)
  DescSelected(id:any, desc:any){
    var x = document.getElementById("episodeInfo" + id);
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("desc").innerHTML = desc;
  } else {
    x.style.display = "none";
  }
    /* this.descSelected = !this.descSelected;
    if(value == document.getElementById("desc").innerHTML){
      console.log(value + " = " + document.getElementById("desc").innerHTML);
      
    }
    if(this.descSelected){
      console.log("DescSelected is true");
      
      //document.getElementById("desc").innerHTML = value;
    }
    else if(!this.descSelected){
      console.log("DescSelected is false");
      //document.getElementById("desc").innerHTML = null;
    } */
  }

}
