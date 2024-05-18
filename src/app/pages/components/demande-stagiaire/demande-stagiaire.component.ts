import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { DemandeStagiaire } from '../../../core/service/demande-stagiaire.model';
import { DemandeStagiaireService } from '../../../core/service/demande-stagiaire.service';

@Component({
  selector: 'app-demande-stagiaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './demande-stagiaire.component.html',
  styleUrl: './demande-stagiaire.component.scss'
})
export class DemandeStagiaireComponent {
  demandeForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private demandeService: DemandeStagiaireService) {}

  ngOnInit(): void {
    this.demandeForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      debutStage: ['', Validators.required],
      finStage: ['', Validators.required],
      filiere: ['', Validators.required],
      centre: ['', Validators.required]
    });

   
  }
  onSubmit() {
    if (this.demandeForm.valid) {
      const demandeData: DemandeStagiaire = this.demandeForm.value;
      this.demandeService.createDemandeStagiaire(demandeData)
        .subscribe(response => {
          console.log(response);
          this.demandeForm.reset();
        }, error => {
          console.error("Une erreur s'est produite lors de l'envoi de la demande.", error);
        });
    } else {
      console.log("Veuillez remplir correctement le formulaire.");
    }
  }

}