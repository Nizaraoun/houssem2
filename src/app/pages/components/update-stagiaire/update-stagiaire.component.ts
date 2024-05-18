import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../../../core/service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-stagiaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-stagiaire.component.html',
  styleUrl: './update-stagiaire.component.scss'
})
export class UpdateStagiaireComponent {

  updateStagiaireForm!: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute,
    private service: StagiaireService,
    private fb: FormBuilder,
    private router: Router){ }

    ngOnInit(){ 
      this.updateStagiaireForm= this.fb.group({
      name:[null, [Validators.required]],
      phone:[null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]]
    })
      this.getStagiaireById();

    }
    getStagiaireById(){
      this.service.getStagiaireById(this.id).subscribe((res)=> {
        console.log(res);
        this.updateStagiaireForm.patchValue(res);
      })
    }
    updateStagiaire(){
      this.service.updateStagiaire(this.id, this.updateStagiaireForm.value).subscribe((res)=>{
        console.log(res);
        if(res.id != null){
          this.router.navigate(['/stagiaire']);

        }

      })
    }
}