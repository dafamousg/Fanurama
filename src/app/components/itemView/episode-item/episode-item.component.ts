import { Component, Input, OnInit } from '@angular/core';
import { Episode } from 'src/app/Models/Episode';
import { FuturamaAPIService } from '../../../services/futurama-api.service';

@Component({
  selector: 'app-episode-item',
  templateUrl: './episode-item.component.html',
  styleUrls: ['./episode-item.component.scss']
})
export class EpisodeItemComponent implements OnInit {

  @Input() episodes:Episode[];
  panelOpenState = false;
  episodeInfoOpenState = false;

  constructor(private futuramaServices:FuturamaAPIService) { }

  ngOnInit(): void {
    console.log("Episode", this.episodes);
  }

  setClasses() {
    let classes = {
      episodes:true
    }
    return classes;
  }

}
