import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-page',
    standalone: true,
    templateUrl: './page.component.html',
    styleUrl: './page.component.scss',
    imports: [RouterOutlet, NavbarComponent]
})
export class PageComponent {

}
