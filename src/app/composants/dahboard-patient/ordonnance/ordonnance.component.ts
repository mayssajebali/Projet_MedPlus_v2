import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicament } from 'src/app/classes/medicament';
import { Ordonnace } from 'src/app/classes/ordonnace';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent  implements OnInit {
  id: number = 0;
  ordonnances: Ordonnace[] = [];
  searchDate: Date = new Date();
  id_dossier_medical!: any;
  id_patient!:number;
  dossierMedical!: number;
  showMedicamentForm: boolean = false;  // New variable for Medicament form
  showOrdonnanceForm: boolean = false;  // New variable for Ordonnance form

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private ordonnanceService: OrdonnanceService,
  ) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      });
      this.getOrdonnances();
    }

  

  getOrdonnances(): void {
    this.ordonnanceService.getOrdonnances(this.id).subscribe(ordonnances => {
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


}

