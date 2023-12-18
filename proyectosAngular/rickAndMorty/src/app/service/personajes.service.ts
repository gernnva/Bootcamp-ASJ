import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  constructor(private https: HttpClient) {
  }

  public getDataAPI() {
    return this.https.get('https://rickandmortyapi.com/api/character/?page=1');

  }
  
  public getPersonaje(id: number){
    return this.https.get('https://rickandmortyapi.com/api/character/' + id);
  }
}
