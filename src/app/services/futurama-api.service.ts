import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, concat, forkJoin, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {Character} from '../Models/Character';
import { Episode } from '../Models/Episode';
import { Quiz } from '../Models/Quiz';

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
  sampleAPI = 'https://api.sampleapis.com/futurama/';
  episodeLink:string = 'episodes';
  questionsLink:string = 'questions';
  subscription:Subscription;
  pageNum:number = 1;
  previousResponse:Character[] = [];

  getObj:object = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  };

  //New(Current) API
  //apiUrl:string = 'https://sampleapis.com/futurama/api/characters';
  
  constructor(private http:HttpClient) { }


  getAllEpisodes():Observable<Episode[]>{
    return this.http.get<Episode[]>(`${this.sampleAPI}${this.episodeLink}`);
  }

  async combinedObservable():Promise<Character[]>
  {    
    let characterCall:Character[] = await fetch(this.apiUrl + this.AllCharactersLink + this.pageLink + this.pageNum, this.getObj)
    .then(res => res.json())
    .then(data => {
      
      const response = [...this.previousResponse, ...data];

      if(data.length > 0)
      {
        ++this.pageNum;
        this.previousResponse = response;
        return this.combinedObservable();
      }
      
      return response;
    });
    
    return characterCall;
  }


  getQuiz():Observable<Quiz[]>{
    return this.http.get<Quiz[]>(`${this.sampleAPI}${this.questionsLink}`);
  }
}
