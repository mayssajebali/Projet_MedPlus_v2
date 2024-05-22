import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';
@Component({
  selector: 'app-profil-patient',
  templateUrl: './profil-patient.component.html',
  styleUrls: ['./profil-patient.component.css']
})
export class ProfilPatientComponent   implements OnInit{
  patient !: Patient ; 
  nouveauMotDePasse: string = ''; 
  confirmationMotDePasse: string = ''; 
  id !:number;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getPatientById(this.id);
    });
  }

  recupere(path: string): void {
    this.router.navigate([ path], { queryParams: { id: this.id } });
  }

  getPatientById(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      patient => {
        this.patient = patient; 
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des détails du patient :', error);
      }
    );
  }

  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  }
 }

  

