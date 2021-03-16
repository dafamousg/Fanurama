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

}
