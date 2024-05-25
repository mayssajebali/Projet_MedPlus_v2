import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMedecinComponent } from './composants/dashboard-medecin/dashboard-medecin/dashboard-medecin.component';
import { NavbarComponent } from './composants/dashboard-medecin/navbar/navbar.component';
import { LoginComponent } from './composants/login/login.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { CreerCompteComponent } from './composants/creer-compte/creer-compte.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarnavComponent } from './composants/side-bar/sidebarnav/sidebarnav.component';
import { DiscussionsComponent } from './composants/dashboard-medecin/discussions/discussions.component';
import { PatientsComponent } from './composants/dashboard-medecin/patients/patients.component';
import { MedecinProfileComponent } from './composants/dashboard-medecin/medecin-profile/medecin-profile.component';
import { UpdateMedecinComponent } from './composants/dashboard-medecin/update-medecin/update-medecin.component';
import { CalendrierRDVComponent } from './composants/dashboard-secretaire/calendrier-rdv/calendrier-rdv.component';
import { DxSchedulerModule } from 'devextreme-angular';
import { DashboardPatientComponent } from './composants/dahboard-patient/dashboard-patient/dashboard-patient.component';
import { NavbarPatientComponent } from './composants/dahboard-patient/navbar-patient/navbar-patient.component';
import { SidebarnavPatientComponent } from './composants/dahboard-patient/sidebarnav-patient/sidebarnav-patient.component';
import { HistoriqueMedicalComponent } from './composants/dahboard-patient/historique-medical/historique-medical.component';
import { OrdonnanceComponent } from './composants/dahboard-patient/ordonnance/ordonnance.component';
import { CertificatComponent } from './composants/dahboard-patient/certificat/certificat.component';
import { FirstPageComponent } from './composants/first-page/first-page.component';
import { DossierMedComponent } from './composants/dashboard-medecin/dossier-med/dossier-med.component';
import { AjouterOrdonnanceComponent } from './composants/dashboard-medecin/ajouter-ordonnance/ajouter-ordonnance.component';
import { AjouterCertificatComponent } from './composants/dashboard-medecin/ajouter-certificat/ajouter-certificat.component';
import { DiscussionPatientComponent } from './composants/dahboard-patient/discussion-patient/discussion-patient.component';
import { ProfilPatientComponent } from './composants/dahboard-patient/profil-patient/profil-patient.component';
import { ConsulterComponent } from './composants/dashboard-medecin/consulter/consulter.component';
import { StatistiquesSecretaireComponent } from './composants/dashboard-secretaire/statistiques-secretaire/statistiques-secretaire.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AjouterRendeVousComponent } from './composants/dahboard-patient/ajouter-rende-vous/ajouter-rende-vous.component';
import { RendezVousComponent } from './composants/dashboard-medecin/rendez-vous/rendez-vous.component';
import { CreerCompteMedecinComponent } from './composants/dashboard-medecin/creer-compte-medecin/creer-compte-medecin.component';
import { CreerCompteSecretaireComponent } from './composants/dashboard-secretaire/creer-compte-secretaire/creer-compte-secretaire.component';
import { DahboardPatientComponent } from './dahboard-patient/dahboard-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMedecinComponent,
    NavbarComponent,
    LoginComponent,
    ErreurComponent,
    CreerCompteComponent,
    SidebarnavComponent,
    DiscussionsComponent,
    PatientsComponent,
    MedecinProfileComponent,
    UpdateMedecinComponent,
    CalendrierRDVComponent,
    DashboardPatientComponent,
    NavbarPatientComponent,
    SidebarnavPatientComponent,
    HistoriqueMedicalComponent,
    OrdonnanceComponent,
    CertificatComponent,
    FirstPageComponent,
    DossierMedComponent,
    AjouterOrdonnanceComponent,
    AjouterCertificatComponent,
    DiscussionPatientComponent,
    ProfilPatientComponent,
    ConsulterComponent,
    StatistiquesSecretaireComponent,
    AjouterRendeVousComponent,
    RendezVousComponent,
    CreerCompteMedecinComponent,
    CreerCompteSecretaireComponent,
    DahboardPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxSchedulerModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
