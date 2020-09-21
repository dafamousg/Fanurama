import { Injectable } from '@angular/core';
import {Character} from '../Models/Character';
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

  //Old API not in use
  apiUrl:string = 'https://futuramaapi.herokuapp.com/';
  AllCharactersLink:string = 'api/v2/characters';
  pageLink:string = '?page=';
  

  //New(Current) API
  //apiUrl:string = 'https://sampleapis.com/futurama/api/characters';
  
  constructor(private http:HttpClient) { }

  getAllCharacters(pageNum:number = 1):Observable<Character[]>{
    return this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.pageLink + pageNum}`);

  }

}
