import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://reqres.in/api/users';
  
  // Get usuarios
  public getUsers():Observable<any> {
    return this.http.get(this.URL_API);
  }


}
