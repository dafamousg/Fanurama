import { Injectable } from '@angular/core';
import {Character} from '../Models/Character';
import { Episode } from '../Models/Episode';
import { Serie } from '../Models/Serie';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, concat} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuturamaAPIService {

  ////#region FuturamaApi
  // http://futuramaapi.herokuapp.com
  //////#endregion
  futuramaApiUrl:string = 'https://futuramaapi.herokuapp.com/api/';
  AllCharactersLink:string = 'v2/characters';
  pageLink:string = '?page=';

  ///#region Sample API
  //https://sampleapis.com/futurama
  ////#endregion
  sampleApiUrl:string = 'https://sampleapis.com/futurama/api/';
  episodesLink:string = 'episodes';
  serieInfoLink:string = 'info';
  
  
  constructor(private http:HttpClient) { }


  getAllEpisodes():Observable<Episode[]>{
    return this.http.get<Episode[]>(`${this.sampleApiUrl + this.episodesLink}`);
  }

  getSeriesInfo():Observable<Serie[]>{
    return this.http.get<Serie[]>(`${this.sampleApiUrl + this.serieInfoLink}`);;
  }

  getAllCharacters(pageNum:number = 1):Observable<Character[]>{
    //return this.concatCall(1);
    var ch = this.http.get<Character[]>(`${this.futuramaApiUrl + this.AllCharactersLink + this.pageLink + pageNum}`);
    
    return ch;
  }

  //Tried Concat but didn't work.
  /*concatCall(page:number):Observable<Character[]>{
    var o1 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + page}`);
    page = 2;
    while(page < 4){
      o1 = concat(o1, this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + page}`));
      console.log(page);
      
      ++page;
    }
    return o1;
  }*/

}
