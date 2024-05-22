import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consultation } from 'src/app/classes/consultation';
import { ConsultationService } from 'src/app/services/consultation.service';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {
  consultations: Consultation[] = [];
  searchDate: Date = new Date();
  id_dossier_medical!:any;
  constructor(private consultationService: ConsultationService, private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,) { }
  ngOnInit(): void {
    if (this.route.parent) {
    this.route.parent.paramMap.subscribe(params => {
      this.id_dossier_medical = params.get('id');
       this.getConsultationByPatients(this.id_dossier_medical);
    });
  }
  
  }

  
  getConsultationByPatients(id:number): void {
    this.consultationService.getConsultationsByPatients(id)
      .subscribe(consultations => this.consultations = consultations);
  }

  rechercherConsultationParDate():void{

    if (this.searchDate) {
      this.consultationService.searchConsultationsByDate(this.searchDate,this.id_dossier_medical)
        .subscribe(consultations => this.consultations = consultations);
    } else {
      this.getConsultationByPatients(this.id_dossier_medical);
    }

  }
}