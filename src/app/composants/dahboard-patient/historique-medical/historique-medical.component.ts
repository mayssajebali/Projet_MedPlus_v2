import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/classes/consultation';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-historique-medical',
  templateUrl: './historique-medical.component.html',
  styleUrls: ['./historique-medical.component.css']
})
export class HistoriqueMedicalComponent implements OnInit {
  consultations: Consultation[] = [];
  searchDate: Date = new Date();
  id !:number;
  id_dossier_medical!:any;
  constructor(private consultationService: ConsultationService, private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.getConsultationByPatients(this.id);

  }

  
  getConsultationByPatients(id:number): void {
    this.consultationService.getConsultationsByPatients(id)
      .subscribe(consultations => this.consultations = consultations);
  }

  rechercherConsultationParDate():void{

    if (this.searchDate) {
      this.consultationService.searchConsultationsByDate(this.searchDate,this.id)
        .subscribe(consultations => this.consultations = consultations);
    } else {
      this.getConsultationByPatients(this.id);
    }

  }
}


