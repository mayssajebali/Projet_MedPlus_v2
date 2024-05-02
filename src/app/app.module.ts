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
@NgModule({
  declarations: [
    AppComponent,
    DashboardMedecinComponent,
    NavbarComponent,
    LoginComponent,
    ErreurComponent,
    CreerCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
