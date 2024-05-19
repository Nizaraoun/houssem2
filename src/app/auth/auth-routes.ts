import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistreComponent } from "./registre/registre.component";
import { HomeComponent } from "../pages/components/home/home.component";

export default [
    { path: 'login', component: LoginComponent },
    { path: 'registre', component: RegistreComponent },
    { path: '/home' , component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
] satisfies Routes;