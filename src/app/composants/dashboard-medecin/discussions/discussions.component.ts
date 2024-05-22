import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Discussion } from 'src/app/classes/discussion';
import { Patient } from 'src/app/classes/patient';
import { PatientService } from 'src/app/services/patient.service';

import { format, sub } from 'date-fns';
import { Subscription } from 'rxjs';
import { DiscussionService } from 'src/app/services/discussion.service';
@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})
export class DiscussionsComponent implements OnInit,OnDestroy  {
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  messages: Discussion[] = [];
  searchTerm: string = '';
  selectedPatientId: number=0;
  selectedPatientName: string = '';
  message:string=''
  formattedDate:string='';
  heure:string='';
  discussion!:string[];
  msgs: string[] = [];
  messageSubscription!: Subscription;
  private sseSubscription!: Subscription;
  msg="";
  currentTime!: string;
discussions:Discussion[] = [];
previousDiscussionsLength: number = 0;
filteredDiscussions: Discussion[] = [];

  constructor(private patientService:PatientService,private router:Router,
    private route:ActivatedRoute,private discussionService:DiscussionService,private sseService: PatientService) {}

  ngOnInit(): void {
   
    this.loadPatients();
    this.subscribeToSse();

  }
  ngOnDestroy(): void {
    if (this.sseSubscription) {
      this.sseSubscription.unsubscribe();
    }
  }


loadPatients() {
    this.patientService.getPatientsDiscussions().subscribe(
      (data: Patient[]) => {
        this.patients = data;
        this.filteredPatients = [...this.patients];
      },
      (error) => {
        console.log('Error fetching patients:', error);
      }
    );
}

  searchPatients() {
    this.filteredPatients = this.patients.filter(patient => {
      const fullName = `${patient.nom} ${patient.prenom}`.toLowerCase();
      return fullName.includes(this.searchTerm.toLowerCase());
    });
  }
  filterDiscussions() {
    this.filteredDiscussions = this.discussions.filter(discussion => discussion.patient_id === this.selectedPatientId);
  }
  loadDiscussions(patientId: number) {
    this.selectedPatientId = patientId;
    const selectedPatient = this.patients.find(patient => patient.id_patient === patientId);
    this.selectedPatientName = selectedPatient ? `${selectedPatient.nom} ${selectedPatient.prenom}` : '';
    this.patientService.getDiscussionsByPatientId(patientId).subscribe(
      (data: Discussion[]) => {
        this.discussions = data;
        this.previousDiscussionsLength = this.discussions.length;
        this.filterDiscussions();

      },
      (error) => {
        console.log('Error fetching discussions:', error);
      }
    );
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
      id_expediteur:1001,
      id_recepteur:this.selectedPatientId
    };

    this.patientService.addDiscussion(newDiscussion).subscribe(
      response => {
        console.log('Message envoyé avec succès', response);
        this.message=''
        this.messages.push(newDiscussion); 
        this.filterDiscussions(); 
      },
      error => {
        console.error("Erreur lors de l\'envoi du message", error);
      }
    );
  }

  getMessageClass(message: Discussion): string {
    return message.id_expediteur === 1001 ? 'message-medecin' : 'message-patient';
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
  subscribeToSse() {
    const url = 'http://localhost:8084/stream-sse';
    this.sseSubscription = this.sseService.getServerSentEvent(url).subscribe({
      next: (message: string) => {
        try {
          const newDiscussions: Discussion[] = JSON.parse(message);
          this.discussions=newDiscussions;
          console.log(this.discussions);
          if (this.discussions.length > this.previousDiscussionsLength) {
            this.previousDiscussionsLength = this.discussions.length;
            this.filterDiscussions();

           
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
  
  /*parseMessage(message: string): Discussion | null {
    // Solution 1: Si le message est un JSON
    try {
      const parsedMessage = JSON.parse(message);
      return new Discussion(
        0, // Id de discussion fictif
        parsedMessage.content,
        parsedMessage.time,
        1, // Id de médecin fictif
        this.selectedPatientId,
        this.selectedPatientId, // Expéditeur fictif
        2 // Récepteur fictif
      );
    } catch (error) {
      console.error('Error parsing message:', error);
      return null;
    }
*/
    
  }


