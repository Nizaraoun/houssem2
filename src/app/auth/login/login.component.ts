
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StagiaireService } from '../../core/service';
import { AuthService } from '../../core/service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(
    private router: Router,
    private stagiaireService: StagiaireService,
    private authService: AuthService
  ) {}
// hedha eli khdamta ane
  login() {
    this.authService.Login(this.emailControl.value!, this.passwordControl.value!).subscribe(
      (data) => {
        if (data) {

          this.router.navigate(['dashboard', 'stagiaire']);
          alert('login success !!');
        } else {
          alert('votre mot de passe est fausse! verifier voter mot de passe');
        }
      },
      (error) => {}
    );
    
    
  }

  // hedha lgita makhdoum 
  onSubmit() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;
    this.stagiaireService.getDataByEmail(email).subscribe(
      (data) => {
        if (data.password == password) {
          this.router.navigate(['dashboard','stagiaire']);
          alert('login success !!');
        } else {
          alert('votre mot de passe est fausse! verifier voter mot de passe');
        }
      },
      (error) => {}
    );
  }
}
