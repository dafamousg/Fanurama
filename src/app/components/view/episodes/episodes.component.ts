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

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    this.futuramaServices.getAllEpisodes().subscribe(ep => {
      this.episodes = ep;
    })
  }

}
