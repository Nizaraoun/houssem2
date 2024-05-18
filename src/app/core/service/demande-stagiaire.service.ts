import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeStagiaire } from './demande-stagiaire.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeStagiaireService {
  
  private apiUrl = 'http://localhost:8000/api/demandes';

  constructor(private http: HttpClient) {}

  getAllDemandesStagiaires(): Observable<DemandeStagiaire[]> {
    return this.http.get<DemandeStagiaire[]>(this.apiUrl);
  }

  createDemandeStagiaire(demande: DemandeStagiaire): Observable<DemandeStagiaire> {
    return this.http.post<DemandeStagiaire>(this.apiUrl, demande);
  } 
  
  
}
