import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
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
      //If episode 1-12, season = 1
      ep.map(s => {
        var id = s.id;
        switch(s != null){
          case (id <= 13):
            s.season = 1;            
            break;
          case (id <= 32):
            s.season = 2;
            break;
          case (id <= 54):
            s.season = 3;
            break;
          case (id <= 72):
            s.season = 4;
            break;
          case (id <= 76):
            s.season = 5;
            break;
          case (id <= 102):
            s.season = 6;
            break;
          case (id <= 128):
            s.season = 7;
            break;
          default:
            s.season = 0;
            break;
        }
        this.episodes = ep;
      })   
    })
  }

  getSeason(season:any){
    return this.episodes?.filter(episode => episode.season === season)
  }

  //Shows episode description on top of page in div element (id = desc)
  /* DescSelected(id:any, desc:any){
    var episodeId = document.getElementById("episodeInfo" + id);
    var topDesc = document.getElementById("desc");

    //If pageDesc is empty or episodeInfo is collapsed, show info and change pageDesc
    if (!topDesc.innerHTML && episodeId.style.display === "none") {
      
      episodeId.style.display = "block";
      topDesc.innerHTML = desc;

    }
    //If pageDesc is not empty and episode info is opened, collapse info and remove pageDesc
    else if(topDesc.innerHTML && episodeId.style.display === "block") {

      episodeId.style.display = "none";
      topDesc.innerHTML = "";

    }
    //If pageDesc is not empty and current episodeInfo is collapse, show new episodeInfo and pageDesc.
    else if(topDesc.innerHTML && episodeId.style.display !== "block"){
      var episode = this.episodes?.filter(ep => ep.desc === topDesc.innerHTML);

      episode.map( e => {
        document.getElementById("episodeInfo" + e.id).style.display="none";
      })
      
      episodeId.style.display = "block";
      topDesc.innerHTML = desc;

    }
  
  } */

    
    OpenEpisodeInfo(id:any){
      var episodeId = document.getElementById("episodeInfo" + id);      
      var episodeObj = this.episodes?.filter(ep => ep.id === id);
      var openEpisodes = this.episodes?.filter(ep => ep.isOpen === true);
      
      if (episodeId.style.display === "none") {
        
        openEpisodes.map( e => {
          e.isOpen = false;
          document.getElementById("episodeInfo" + e.id).style.display="none";
        })

        episodeObj.map( e => {
          e.isOpen = true;
          episodeId.style.display = "block";
        })
        
      }
      //Display None to all episodes that should not be open.
      else{
        openEpisodes.map( e => {
          e.isOpen = false;
          document.getElementById("episodeInfo" + e.id).style.display="none";
        })
  
      }    
    }


  OpenSeason(season:number){
    console.log("OpenSeason");
    
    var seasonElement = document.getElementById("season" + season);

    seasonElement.style.display = "block";
  }

}
