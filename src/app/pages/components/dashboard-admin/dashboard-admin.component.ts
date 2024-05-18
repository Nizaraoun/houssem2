import { Component, OnInit } from '@angular/core';
import { DemandeStagiaire } from '../../../core/service/demande-stagiaire.model';
import { DashboardAdminService } from '../../../core/service/dashboard-admin.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  demandesStagiaires: DemandeStagiaire[] = [];

  
  constructor(private dashboardAdminService: DashboardAdminService) {}

  ngOnInit(): void {
    this.getDemandesStagiaires();
  }

  getDemandesStagiaires() {
    this.dashboardAdminService.getAllDemandesStagiaires()
      .subscribe(demandesStagiaires => {
        this.demandesStagiaires = demandesStagiaires;
        console.log(this.demandesStagiaires);
      });
  }
  telechargerPDF(index: number) {
    const demande = this.demandesStagiaires[index];
    const doc = new jsPDF();
    doc.text(`Nom: ${demande.nom}`, 10, 10);
    doc.text(`Prénom: ${demande.prenom}`, 10, 20);
    doc.text(`Email: ${demande.email}`, 10, 30);
    doc.text(`Téléphone: ${demande.telephone}`, 10, 40);
    doc.text(`Début du stage: ${demande.debutStage}`, 10, 50);
    doc.text(`Fin du stage: ${demande.finStage}`, 10, 60);
    doc.text(`Filière: ${demande.filiere}`, 10, 70);
    doc.text(`Centre: ${demande.centre}`, 10, 80);
    doc.save(`demande_stagiaire_${index + 1}.pdf`);
}
    

        
      
}


