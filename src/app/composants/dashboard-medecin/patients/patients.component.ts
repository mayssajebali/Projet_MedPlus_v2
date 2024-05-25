import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/classes/patient';
import { DiscussionService } from 'src/app/services/discussion.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit{
constructor(private patientService:PatientService,private route:ActivatedRoute,private router:Router){}
  
  patients:Patient[] =[];
  discussions: any[] = [];
  id:number=0;
  discussionSubscription: Subscription = new Subscription;
  ngOnInit(): void {
    this.loadPatients();
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  
    });

  }
  loadPatients() {
    this.patientService.getPatientsDiscussions().subscribe(
      (data) => {
        this.patients = data;
        
        if (this.patients.length > 0) {
          console.log('patients récupérés');
        }
      },
      (error) => {
        console.log('Error fetching patients:', error);
      }
    );
  }

  consulterPatient(id:number){
    this.router.navigate(['/patients/', id])
 }
 AllerVers(path: string): void {
  this.router.navigate([path], { queryParams: { id:this.id} });
}

}
