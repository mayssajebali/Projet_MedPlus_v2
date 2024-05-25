import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/classes/patient';

@Component({
  selector: 'app-modifierpatient',
  templateUrl: './modifierpatient.component.html',
  styleUrls: ['./modifierpatient.component.css']
})
export class ModifierpatientComponent implements OnInit {
  patientForm!: FormGroup;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {
    this.patientForm = this.fb.group({
      id_patient: [0],
      cin: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', Validators.required],
      sexe: ['', Validators.required],
      date_de_naissance: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = +params['id']; // Convert to number
      this.getPatientById(this.id);
    });
  }

  getPatientById(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      (patient: Patient) => {
        this.patientForm.patchValue(patient);
      },
      error => { 
        console.error('Une erreur s\'est produite lors de la récupération des détails du patient :', error);
      }
    );
  }

  onModifier(): void {
    if (this.patientForm.valid) {
      const updatedPatient = this.patientForm.value;
      this.patientService.modifierProfil(updatedPatient, this.id).subscribe(
        data => {
          alert('Profil mis à jour avec succès');
          this.router.navigate(['/patient']);
        },
        error => {
          console.error('Une erreur s\'est produite lors de la mise à jour du profil :', error);
        }
      );
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
