import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DossierMedical } from 'src/app/classes/dossier-medical';
import { Medicament } from 'src/app/classes/medicament';
import { Ordonnace } from 'src/app/classes/ordonnace';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';

@Component({
  selector: 'app-ajouter-ordonnance',
  templateUrl: './ajouter-ordonnance.component.html',
  styleUrls: ['./ajouter-ordonnance.component.css']
})
export class AjouterOrdonnanceComponent implements OnInit {
  id: number = 0;
  ordonnances: Ordonnace[] = [];
  searchDate: Date = new Date();
  id_dossier_medical!: any;
  id_patient!:number;
  medicamentForm!: FormGroup;
  dossierMedical!: number;
  showMedicamentForm: boolean = false;  // New variable for Medicament form
  showOrdonnanceForm: boolean = false;  // New variable for Ordonnance form

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private ordonnanceService: OrdonnanceService,
    private fb: FormBuilder
  ) {
    this.medicamentForm = this.fb.group({
      selectedOrdonnanceId: [''],
      nom_medicament: [''],
      dosage_medicament: [''],
      nbr_fois_par_jour: [''],
      duree: ['']
    });
  }

  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.paramMap.subscribe(params => {
        this.id_dossier_medical = params.get('id');
        this.getOrdonnances();
      });
    }
    this.ordonnanceService.getDossierMedical(this.id_dossier_medical).subscribe(
      (data) => {this.dossierMedical=data}
    );
  }

  getOrdonnances(): void {
    this.ordonnanceService.getOrdonnances(this.id_dossier_medical).subscribe(ordonnances => {
      this.ordonnances = ordonnances;
      this.ordonnances.forEach(ordonnance => {
        this.ordonnanceService.findMedicamentsByOrdonnanceByidPatient(ordonnance.id, this.id_dossier_medical).subscribe(medicaments => {
          ordonnance.medicaments = medicaments;
        });
      });
    });
  }

  imprimerOrdonnance(ordonnanceId: number) {
    const ordonnanceContentId = 'ordonnanceContent_' + ordonnanceId;
    const contenu = document.getElementById(ordonnanceContentId);

    if (contenu) {
      const fenetreImpression = window.open('', '', 'height=600,width=800');

      if (fenetreImpression) {
        fenetreImpression.document.write('<html><head><title>Imprimer Ordonnance</title>');
        fenetreImpression.document.write('</head><body>');
        fenetreImpression.document.write(contenu.innerHTML);
        fenetreImpression.document.write('</body></html>');
        fenetreImpression.document.close();
        fenetreImpression.print();
      } else {
        console.error("La fenêtre d'impression n'a pas pu être ouverte.");
      }
    } else {
      console.error("L'élément d'ordonnance n'a pas été trouvé.");
    }
  }

  rechercherOrdonnancesParDate(): void {
    if (this.searchDate) {
      this.ordonnanceService.getOrdonnancesByDate(this.searchDate, this.id_dossier_medical)
        .subscribe(ordonnances => this.ordonnances = ordonnances);
    } else {
      this.getOrdonnances();
    }
  }

  addMedicamentToExistingOrdonnance(): void {
    const selectedOrdonnanceId = this.medicamentForm.get('selectedOrdonnanceId')?.value;
    const newMedicament: Medicament = {
      id: 0,
      nom_medicament: this.medicamentForm.get('nom_medicament')?.value,
      dosage_medicament: this.medicamentForm.get('dosage_medicament')?.value,
      nbr_fois_par_jour: this.medicamentForm.get('nbr_fois_par_jour')?.value,
      duree: this.medicamentForm.get('duree')?.value,
      ordonnance: selectedOrdonnanceId
    };

    this.ordonnanceService.addMedicament(newMedicament).subscribe(
      (medicament) => {
        console.log('Medicament ajouté avec succès', medicament);
        alert('Medicament ajouté avec succès');
        const ordonnance = this.ordonnances.find(o => o.id === selectedOrdonnanceId);
        if (ordonnance) {
          ordonnance.medicaments.push(medicament);
        }
      },
      (error) => {
        console.error('Error adding medicament', error);
      }
    );
  }

  addOrdonnanceWithMedicaments(): void {
    const newOrdonnance: Ordonnace = {
      id: 0,
      date_creation: new Date(),
      medicaments: []
    };

    this.ordonnanceService.addOrdonnance(newOrdonnance, this.id_dossier_medical).subscribe(
      (ordonnance) => {
        const newMedicament: Medicament = {
          id: 0,
          nom_medicament: this.medicamentForm.get('nom_medicament')?.value,
          dosage_medicament: this.medicamentForm.get('dosage_medicament')?.value,
          nbr_fois_par_jour: this.medicamentForm.get('nbr_fois_par_jour')?.value,
          duree: this.medicamentForm.get('duree')?.value,
          ordonnance: ordonnance.id
        };

        this.ordonnanceService.addMedicament(newMedicament).subscribe(
          (medicament) => {
            console.log('Ordonnance ajoutée avec succès', medicament);
            alert('Ordonnance ajoutée avec succès');
            ordonnance.medicaments.push(medicament);
            this.ordonnances.push(ordonnance);
          },
          (error) => {
            console.error('Error adding medicament', error);
          }
        );
      },
      (error) => {
        console.error('Error adding ordonnance', error);
      }
    );
  }
}

