import { Component } from '@angular/core';
import { StagiaireService } from '../../../core/service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-stagiaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-stagiaire.component.html',
  styleUrl: './post-stagiaire.component.scss'
})
export class PostStagiaireComponent {
  postStagiaireForm!: FormGroup;


  constructor(private stagiaireService: StagiaireService,
    private fb:FormBuilder,
    private router: Router){}

  ngOnInit(){
    this.postStagiaireForm = this.fb.group({
      name:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]]
      
    })

  }
 /// postStagiaire(){
    ///console.log(this.postStagiaireForm.value);
    ///this.stagiaireService.postStagiaire(this.postStagiaireForm.value).subscribe((res)=>{
    ///  console.log(res);
   ///   this.router.navigateByUrl("");
   /// });
  ///}

  postStagiaire() {
    if (this.postStagiaireForm.valid) {
      this.stagiaireService.postStagiaire(this.postStagiaireForm.value).subscribe(
        (newStagiaire) => {
          console.log('Stagiaire créé avec succès :', newStagiaire);
          this.router.navigate(['/stagiaire']); // Rediriger vers une autre page après la création
        },
        error => {
          console.log('Erreur lors de la création du stagiaire :', error);
          // Gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
        }
      );
    } else {
      console.log('Le formulaire est invalide.');
      // Gérer le cas où le formulaire n'est pas valide, par exemple afficher des messages d'erreur
    }
  }
   

}



