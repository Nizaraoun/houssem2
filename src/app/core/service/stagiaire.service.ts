import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';




@Injectable({
  providedIn: 'root',
})
export class StagiaireService {
 
  private apiStagiaire = environment.apiUrl; 
  constructor(private http: HttpClient, private router: Router) {}


  postStagiaire(stagiaire:any): Observable<any> {
    return this.http.post<any>(`${this.apiStagiaire}/stagiaire`,stagiaire);
  }
  

  updateStagiaire(id: number, stagiaire: any):Observable<any> {
    return this.http.put(`${this.apiStagiaire}/stagiaire/`+ id , stagiaire);
    ;
  }
  getStagiaireById(id: number):Observable<any> {
    return this.http.get(`${this.apiStagiaire}/stagiaire/`+ id);

  }
  getAllStagiaire():Observable<any>{
    return this.http.get<any>(`${this.apiStagiaire}/stagiaires`);

  }
  deleteStagiaire(id: number): Observable<any> {
    return this.http.delete(`${this.apiStagiaire}/stagiaire/` + id);
  }
  
 
 // constructor(private http: HttpClient, private router: Router) {}
  sendData(value: any): Observable<any> {
    const url = `${this.apiStagiaire}/stagiaire`;
    return this.http.post(url, value).pipe(
      tap((response) => {
        console.log('Réponse du serveur:', response);
      }),
      catchError((error) => {
        console.error('Erreur lors de l\'envoi des données:', error);

        return of(null);
      })
    );
  }

  getDataByEmail(email: any) {
    const url = `${this.apiStagiaire}/stagiaireEmail/${email}`;
    return this.http.get<any>(url);
  }
}