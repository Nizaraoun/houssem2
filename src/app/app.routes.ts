import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth-routes'),
	},
	{
		path: '',
		loadChildren: () => import('./pages/pages-routes'),
	},
	{
		path: '**', redirectTo: 'auth', pathMatch: 'full',
	},
 

];