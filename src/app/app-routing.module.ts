import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './composants/login/login.component';
import { DashboardMedecinComponent } from './composants/dashboard-medecin/dashboard-medecin/dashboard-medecin.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { CreerCompteComponent } from './composants/creer-compte/creer-compte.component';
import { authGuard } from './auth.guard';
import { DiscussionsComponent } from './composants/dashboard-medecin/discussions/discussions.component';
import { PatientsComponent } from './composants/dashboard-medecin/patients/patients.component';
import { MedecinProfileComponent } from './composants/dashboard-medecin/medecin-profile/medecin-profile.component';
import { UpdateMedecinComponent } from './composants/dashboard-medecin/update-medecin/update-medecin.component';
import { CalendrierRDVComponent } from './composants/dashboard-secretaire/calendrier-rdv/calendrier-rdv.component';
import { DashboardPatientComponent } from './composants/dahboard-patient/dashboard-patient/dashboard-patient.component';
import { HistoriqueMedicalComponent } from './composants/dahboard-patient/historique-medical/historique-medical.component';
import { OrdonnanceComponent } from './composants/dahboard-patient/ordonnance/ordonnance.component';
import { CertificatComponent } from './composants/dahboard-patient/certificat/certificat.component';
import { FirstPageComponent } from './composants/first-page/first-page.component';
import { DossierMedComponent } from './composants/dashboard-medecin/dossier-med/dossier-med.component';
import { AjouterOrdonnanceComponent } from './composants/dashboard-medecin/ajouter-ordonnance/ajouter-ordonnance.component';
import { FromOrdonnanceComponent } from './composants/dashboard-medecin/from-ordonnance/from-ordonnance.component';
import { AjouterCertificatComponent } from './composants/dashboard-medecin/ajouter-certificat/ajouter-certificat.component';
import { DiscussionPatientComponent } from './composants/dahboard-patient/discussion-patient/discussion-patient.component';
import { ProfilPatientComponent } from './composants/dahboard-patient/profil-patient/profil-patient.component';
import { ConsulterComponent } from './composants/dashboard-medecin/consulter/consulter.component';

const routes: Routes = [
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  { path: 'first-page', component:FirstPageComponent },
  {path:'login',title:'login',component:LoginComponent},
  {path:'signup',title:'Créer compte',component:CreerCompteComponent},
  {path:'dash-medecin',title:'espace médecin',component:DashboardMedecinComponent,canActivate:[authGuard]},
  {path:'creer-compte',title:'creer compte',component:CreerCompteComponent},
  {path:'discussion',title:'disscussion',component:DiscussionsComponent},
  {path:'patients',title:'patients',component:PatientsComponent},
  {path:'patients/:id',title:'patients',component:DossierMedComponent,
  children:[
  { path: 'consulter',title:'Mon Historique Médical', component:ConsulterComponent },
  {path: 'ordonnace', title:'Mes Ordonnances',component: AjouterOrdonnanceComponent },
  { path: 'certificat',title:'Ajouter Certificat', component:AjouterCertificatComponent },
  { path: '',redirectTo:'consulter',pathMatch:'full'},
]},
  {path:'medecin',title:'Profil medecin',component:MedecinProfileComponent},
  {path:'modifierMedecin',title:'Modifier profil medecin',component:UpdateMedecinComponent},
  {path:'calendrier',title:'calendrier',component:CalendrierRDVComponent},
  { path:'discussion-patient',title:'discussions ', component:DiscussionPatientComponent },
  { path: 'profil-patient',title:'Mon profil ', component:ProfilPatientComponent},
  {path:'dash-patient',title:'espace patient',component:DashboardPatientComponent,
  children:[
   { path: 'historique',title:'Mon Historique Médical', component:HistoriqueMedicalComponent },
    {path: 'ordonnace', title:'Mes Ordonnances',component: OrdonnanceComponent },
    { path: 'certificat',title:'Mes Certificats', component:CertificatComponent },
    { path: '',redirectTo:'historique',pathMatch:'full'},
    
]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',title:'erreur',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

