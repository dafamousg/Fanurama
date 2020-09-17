import { Injectable } from '@angular/core';
import {Character} from '../Models/Character';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {concat, Observable} from 'rxjs';
import { allowedNodeEnvironmentFlags } from 'process';

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
  AllCharactersLink:string = 'api/v2/characters?page=';
  page:number = 10;
  res:any;
  

  //New(Current) API
  //apiUrl:string = 'https://sampleapis.com/futurama/api/characters';
  
  constructor(private http:HttpClient) { }

  getAllCharacters():Observable<Character[]>{
    
    /*while(this.page < 2){
      this.res = concat(this.res, this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.page}`));
      console.log(this.page);
      this.page++;
    }*/
    
    
    console.log(this.page);
    return this.http.get<Character[]>(`${this.apiUrl + this.AllCharactersLink + this.page}`);
  }

}
