import { Injectable } from '@angular/core';
import { Login,LoginResponce } from './Login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:3000/login';

  constructor(private httpClient: HttpClient) {}
  
//this function returns observable type blog array
  
  login(Login: Login): Observable<LoginResponce> {
    return this.httpClient.post(this.baseUrl, Login);
  }

}
