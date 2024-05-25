import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { RendezVous } from 'src/app/classes/rendez-vous';
import { PatientService } from 'src/app/services/patient.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-calendrier-rdv',
  templateUrl: './calendrier-rdv.component.html',
  styleUrls: ['./calendrier-rdv.component.css']
})
export class CalendrierRDVComponent implements OnInit{
  pat!:Patient;
  highlightedDate: Date | null = null;
  heure!:String;
  text!:String;
  finDate!:Date;
  debutDate!:Date;
  form!:FormGroup;
  clickedDate!: Date;
  seen:boolean=false;
  unavailableDates: Date[] = [new Date(2024, 4, 10), new Date(2024, 4, 15)];
  rvs:RendezVous[]=[];

  patientsTest:Patient[]=[];
  patients:Patient[]=[];
  id:number=0;
  constructor(private rdvService:RendezVousService,private fb:FormBuilder,private patientServ:PatientService,
    private route:ActivatedRoute,private router:Router)
{}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.form=this.fb.group({
      text:['pnemonie'],
      lesPatient:[],
   
    });
    this.patientServ.getAllPatients().subscribe(
      data => {
        this.patients = data;
        if (this.patients.length > 0) {
          this.form.get('lesPatient')?.setValue(this.patients[0]);
        }
      },
      error => console.error('Error fetching patients:', error)
    );
    
    this.rdvService.getrv().subscribe(data=>this.rvs=data);
    this.rdvService.getPatient(2).subscribe(data=>this.pat=data);
    
  }

  
  
    
  currentDate: Date = new Date(2024, 3, 29);
  ondelete(e:any){
    this.rdvService.deleteRdv(e.appointmentData.id_rendez_vous).subscribe(() => {
      console.log('Appointment deleted successfully');
    },
    error => {
      console.error('Error deleting appointment:', error);
    }
  );

  }
  
  disableAllCells(data: any) {
    this.clickedDate= data.cellData.startDate;
    data.cancel = true;
    this.debutDate=this.clickedDate; 
    this.seen=!this.seen;
  }
  disableAppointmentForm(data: any) {
    data.cancel = true; 
    alert("form")  }
  onReset(){
    this.form.reset();
  }
 
  setAppointmentTime(hour: string) {
    this.heure=hour;

  }
  
 

    addRdv(){
      const selectedDate = new Date(this.clickedDate); 
      const hourParts = this.heure.split(':');
      const selectedHour = +hourParts[0]; 
      const selectedMinutes = +hourParts[1]; 
      selectedDate.setHours(selectedHour); 
      selectedDate.setMinutes(selectedMinutes);
      const endDate = new Date(selectedDate); 
      endDate.setHours(selectedHour + 2);

      const rendezVous = new RendezVous(
        0, 
        selectedDate, 
      
        endDate, 
        this.form.get('text')?.value,
        this.form.get('lesPatient')?.value,
      );
      
      this.rdvService.addRdv(rendezVous).subscribe(
        data => {
          if (data!=null){this.rvs.push(data);}
          else{alert("la date est déjà prise")}
        },
        error => {
          console.error('Error adding rendezvous:', error);
          
        }
      );
      
    }



  isDateAvailable(date: Date): boolean {
    return !this.unavailableDates.some(unavailableDate =>
      date.getFullYear() === unavailableDate.getFullYear() &&
      date.getMonth() === unavailableDate.getMonth() &&
      date.getDate() === unavailableDate.getDate()
    );
  }

  getCellStyles(date: Date): any {
    if (!this.isDateAvailable(date)) {
      return { backgroundColor: 'red' }; 
    }
    return {}; 
  }
  
  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  } 


}

