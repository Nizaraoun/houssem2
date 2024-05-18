import { Routes } from "@angular/router";
import { PageComponent } from "./page.component";
import { RegistreComponent } from "../auth/registre/registre.component";
import { LoginComponent } from "../auth/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { StagiaireComponent } from "./components/stagiaire/stagiaire.component";
import { UpdateStagiaireComponent } from "./components/update-stagiaire/update-stagiaire.component";
import { PostStagiaireComponent } from "./components/post-stagiaire/post-stagiaire.component";
import { DemandeStagiaireComponent } from "./components/demande-stagiaire/demande-stagiaire.component";
import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";


export default [
	{
		path: '',
		component: PageComponent,
		children: [
		  {
			path: 'home',
			component: HomeComponent,
		  },
		  {
			path: 'stagiaire',
			component: StagiaireComponent,
		  },
		  { path: 'login', component: LoginComponent },
		  { path: 'registre', component: RegistreComponent },
		  {path:'post', component:PostStagiaireComponent},
		  { path: 'update-stagiaire/:id', component: UpdateStagiaireComponent },
		  {path:'demandes', component:DemandeStagiaireComponent},
		  { path: '', redirectTo: '/demande-stagiaire', pathMatch: 'full' },
		  { path: 'dashboard-admin', component:DashboardAdminComponent},
		],
	  },
	
	
] satisfies Routes;