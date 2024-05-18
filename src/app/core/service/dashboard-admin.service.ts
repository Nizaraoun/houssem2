import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeStagiaire } from './demande-stagiaire.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardAdminService {
  private apiUrl = 'http://localhost:8000'; // Remplacez cette URL par l'URL de votre API


  constructor(private http: HttpClient) { }
  getAllDemandesStagiaires(): Observable<DemandeStagiaire[]> {
    return this.http.get<DemandeStagiaire[]>(`${this.apiUrl}/dashboard-admin`);
  }
  saveDemandesAsPdf(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/save-pdf`, { responseType: 'blob' });
  }
}
