import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Discussion } from 'src/app/classes/discussion';
import { Patient } from 'src/app/classes/patient';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-dashboard-medecin',
  templateUrl: './dashboard-medecin.component.html',
  styleUrls: ['./dashboard-medecin.component.css']
})
export class DashboardMedecinComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private sseSubscription!: Subscription;
  patients: Patient[] = [];
  discussions!:string;
  nbPaltients:number=0;
  constructor(private sseService: PatientService) {}

  ngOnInit() {
    this.subscribeToSse();
    this.sseService.getAllPatients().subscribe((data)=>{this.patients=data 
    this.nbPaltients=this.patients.length;});
  
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
}