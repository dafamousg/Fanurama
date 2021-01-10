import { Injectable } from '@angular/core';
import {Character} from '../Models/Character';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Episode } from '../Models/Episode';
import {Observable, concat, forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuturamaAPIService {

  //Old API not in use
  apiUrl:string = 'https://futuramaapi.herokuapp.com/api/';
  AllCharactersLink:string = 'v2/characters';
  pageLink:string = '?page=';
  episodeLink:string = 'https://api.sampleapis.com/futurama/episodes';
  

  //New(Current) API
  //apiUrl:string = 'https://sampleapis.com/futurama/api/characters';
  
  constructor(private http:HttpClient) { }


  getAllEpisodes():Observable<Episode[]>{
    return this.http.get<Episode[]>(`${this.episodeLink}`);
  }

  getAllCharacters(pageNum:number = 1):Observable<Character[]>{
    //return this.concatCall(1);
    var ch = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + pageNum}`);
    
    return ch;
  }

  //Tried Concat but didn't work.
  combinedObservable():Observable<Character[]>{
    const character1 =  this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 1}`);
    const character2 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 2}`);
    const character3 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 3}`);
    const character4 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 4}`);
    const character5 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 5}`);
    const character6 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 6}`);
    const character7 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 7}`);
    const character8 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 8}`);
    const character9 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 9}`);
    const character10 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 10}`);
    const character11 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 11}`);
    const character12 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 12}`);
    const character13 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 13}`);
    const character14 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 14}`);
    const character15 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 15}`);
    const character16 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 16}`);
    const character17 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 17}`);
    const character18 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 18}`);
    const character19 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 19}`);
    const character20 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 20}`);
    const character21 = this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + 21}`);
    

    return forkJoin([character1, character2, character3, character4, character5, character6, character7, character8, character9, character10, character11, character12, character13, character14, character15, character16, character17, character18, character19, character20, character21]).pipe(map(res => {
      return [].concat(...res);
    }));
  }

}
