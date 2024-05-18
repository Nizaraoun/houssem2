import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,]
})
export class AppComponent {
  title = 'angular_final';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}
