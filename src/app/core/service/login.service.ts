import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeStagiaire } from './demande-stagiaire.model';
import { userData } from './userData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  Login(email : String, password :String): Observable<userData[]> {

    return this.http.post<userData[]>(this.apiUrl + 'Login', {email, password});
  }

    Register(userdata : userData): Observable<String> {
     

        return this.http.post<String>(this.apiUrl + 'signup', userdata);
    }
}
