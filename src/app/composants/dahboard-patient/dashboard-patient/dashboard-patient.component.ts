import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dashboard-patient',
  templateUrl: './dashboard-patient.component.html',
  styleUrls: ['./dashboard-patient.component.css']
})
export class DashboardPatientComponent implements OnInit{
  patient!: Patient;
  id!: number;
  id_dossier_medical!:any;
  genre!:string;
  constructor(
    private router: Router,
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getPatient(this.id);
    });

 
  }

  recupere(path: string): void {
    this.router.navigate(['/dash-patient', path], { queryParams: { id: this.id} });
  }

  getPatient(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      patient => {
        this.patient = patient;
      },
      error => {
        console.error('Erreur lors de la récupération du patient : ', error);
      }
    );
  }


  getDossierMedical(id:number){
    this.patientService.getPatientById(id).subscribe(
      (data) => {
        console.log('Patient data:', data);
        this.patient = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails du patient:', error);
      }
    );
}
AllerVers(path: string): void {
  this.router.navigate([path], { queryParams: { id: this.id} });
}

}
