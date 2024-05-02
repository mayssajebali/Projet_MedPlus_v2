import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/login/login.component';
import { DashboardMedecinComponent } from './composants/dashboard-medecin/dashboard-medecin/dashboard-medecin.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { CreerCompteComponent } from './composants/creer-compte/creer-compte.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login',title:'login',component:LoginComponent},
  {path:'dash-medecin',title:'espace médecin',component:DashboardMedecinComponent,canActivate:[authGuard]},
  {path:'creer-compte',title:'creer compte',component:CreerCompteComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',title:'erreur',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

