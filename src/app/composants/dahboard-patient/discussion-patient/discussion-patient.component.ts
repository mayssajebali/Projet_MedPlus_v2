import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Discussion } from 'src/app/classes/discussion';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

import { format, sub } from 'date-fns';
import { Subscription } from 'rxjs';
import { DiscussionService } from 'src/app/services/discussion.service';
import { Medecin } from 'src/app/classes/medecin';
import { MedecinService } from 'src/app/services/medecin.service';
@Component({
  selector: 'app-discussion-patient',
  templateUrl: './discussion-patient.component.html',
  styleUrls: ['./discussion-patient.component.css']
})
export class DiscussionPatientComponent implements OnInit  {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  messages: Discussion[] = [];
  searchTerm: string = '';
  selectedPatientId: number=0;
  selectedPatientName: string = '';
  message:string=''
  formattedDate:string='';
  heure:string='';
  discussion!:String[];
  discussions: Discussion[] = [];
  msgs: string[] = [];
  messageSubscription!: Subscription;
  filteredDiscussions: Discussion[] = [];
  medecin!:Medecin;
  private sseSubscription!: Subscription;
  msg="";
  previousDiscussionsLength:number=0;
  id!:any;
  constructor(private patientService:PatientService,private router:Router,
    private route:ActivatedRoute,private discussionService:DiscussionService,private medecinService:MedecinService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];});
    this.loadDiscussions(this.id);
    this.subscribeToSse();
    this.getMedecin();
    this.messageSubscription = this.discussionService.getMessage().subscribe(
      message => {
        this.msgs.push(message);
      },
      error => {
        console.error('Erreur WebSocket:', error);
      }
    );
    
  }


  ngOnDestroy(): void {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }



  loadDiscussions(patientId: number) {
    this.selectedPatientId = patientId;
    const selectedPatient = this.patients.find(patient => patient.id_patient === patientId);
    this.selectedPatientName = selectedPatient ? `${selectedPatient.nom} ${selectedPatient.prenom}` : '';
    this.patientService.getDiscussionsByPatientId(patientId).subscribe(
      (data: Discussion[]) => {
        this.discussions = data;
        this.previousDiscussionsLength = this.discussions.length;
        this.filteredDiscussions = data;

      },
      (error) => {
        console.log('Error fetching discussions:', error);
      }
    );
}


  applyFilter(): void {
    if (this.searchTerm) {
      this.filteredDiscussions = this.messages.filter(discussion =>
        discussion.message.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredDiscussions = this.messages;
    }
  }

  onSearchTermChange(): void {
    this.applyFilter();
  }
  sendMessage(message: string) {
    if (!message.trim()) {
      return; 
    }
    const currentDate = new Date();
    this.formattedDate = format(currentDate, 'dd MMMM yyyy hh:mm a');
    const newDiscussion: Discussion = {
      id_discussion:0,
      message: message,
      date_discussion:this.formattedDate,
      medecin_id: 1001,
      patient_id: this.selectedPatientId,
      id_expediteur:this.id,
      id_recepteur:1001
    };

    this.patientService.addDiscussion(newDiscussion).subscribe(
      response => {
        console.log('Message envoyé avec succès', response);
        this.message=''
        this.messages.push(newDiscussion);  
      },
      error => {
        console.error("Erreur lors de l\'envoi du message", error);
      }
    );
  }

  getMessageClass(message: Discussion): string {
    return message.id_expediteur === 1001 ? 'message-patient' : 'message-medecin';
  }
  getProfil(message: Discussion): boolean {
    return message.id_expediteur === 1001;
  }


  sendMsg(message: string): void {
    this.discussionService.sendMessage(message);
  }

  
 /* subscribeToSse(): void {
    this.sseSubscription = this.patientService.getAllDiscussions().subscribe(
      data => {
        console.log('Nouveau message SSE:', data);
        this.discussion.push(data);
      },
      error => {
        console.error('Erreur SSE:', error);
      }
    );
  }

  updateLastFetchTime(): void {
    this.lastFetchTime = new Date().toISOString(); // Mettre à jour à l'heure actuelle
  }*/
  getMedecin(){
    this.medecinService.getMedecintById(1001).subscribe(
      data => {this.medecin=data}
    )
  }
  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  }

  subscribeToSse() {
    const url = 'http://localhost:8084/stream-sse';
    this.sseSubscription = this.patientService.getServerSentEvent(url).subscribe({
      next: (message: string) => {
        try {
          const newDiscussions: Discussion[] = JSON.parse(message);
          this.discussions=newDiscussions;
          console.log(this.discussions);
          if (this.discussions.length > this.previousDiscussionsLength) {
            this.previousDiscussionsLength = this.discussions.length;
           
          }
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      },
      error: (error: any) => {
        console.error('Error receiving SSE', error);
      }
    });
  }


}

