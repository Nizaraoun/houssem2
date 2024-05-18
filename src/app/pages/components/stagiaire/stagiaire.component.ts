import { Component } from '@angular/core';
import { StagiaireService } from '../../../core/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  standalone: true,
  imports: [],
  templateUrl: './stagiaire.component.html',
  styleUrl: './stagiaire.component.scss'
})
export class StagiaireComponent {

stagiaire: any;
id: any;
stagiaires: any;



constructor(private stagiaireService: StagiaireService , private router:Router ){ }

  
 topost(): void{
  this.router.navigate(['/post'])
  
 }
 toupdate(id : number): void{
 this.router.navigate(['/update-stagiaire', id]);

 }
  

  ngOnInit(){
    this.getAllStagiaires();
    
  }
  getAllStagiaires(){
    this.stagiaireService.getAllStagiaire().subscribe((res)=>{
      console.log(res);
      this.stagiaires = res;
   
    });
  }

  deleteStagiaire(id: number) :void{
    this.stagiaireService.deleteStagiaire(id).subscribe((res)=> {
      console.log(res);
      ///this.getAllStagiaires();// Rafraîchir la liste après la suppression
   })
 }



}
 
