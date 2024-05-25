import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consultation } from 'src/app/classes/consultation';
import { Discussion } from 'src/app/classes/discussion';
import { Ordonnace } from 'src/app/classes/ordonnace';
import { Patient } from 'src/app/classes/patient';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ConsultationService } from 'src/app/services/consultation.service';
import { DiscussionService } from 'src/app/services/discussion.service';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-statistiques-secretaire',
  templateUrl: './statistiques-secretaire.component.html',
  styleUrls: ['./statistiques-secretaire.component.css']
})
export class StatistiquesSecretaireComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private sseSubscription!: Subscription;
  patients: Patient[] = [];
  discussions!:string;
  nbPaltients:number=0;
  tempsActuelle: string = '';
  private intervalId: any;
  consultations:Consultation[]=[];
  nbconsultations:number=0;
  discussion:Discussion[]=[];
  nbDiscussions:number=0;
  id!:number;
  constructor(private sseService: PatientService,private ConsultationService:ConsultationService,
    private discussionService:DiscussionService,  private route: ActivatedRoute,private router:Router

  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  
    });
    this.subscribeToSse();
    this.sseService.getAllPatients().subscribe((data)=>{this.patients=data 
    this.nbPaltients=this.patients.length;});
    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000);
    this.ConsultationService.getAllConsultations().subscribe((data)=>{this.consultations=data 
      this.nbconsultations=this.consultations.length;});

      this.sseService.getDiscussions().subscribe((data)=>{this.discussion=data 
        this.nbDiscussions=this.discussion.length;});

     
    }

  subscribeToSse() {
    const url = 'http://localhost:8084/stream-sse';
    this.sseSubscription = this.sseService.getServerSentEvent(url).subscribe({
      next: (message: string) => {
        this.currentTime = message;
        console.log(this.currentTime)
      },
      error: (error: any) => {
        console.error('Error receiving SSE', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }
  private updateClock(): void {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.tempsActuelle = `${hours}:${minutes}:${seconds}`;
  }

  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  }
  
}