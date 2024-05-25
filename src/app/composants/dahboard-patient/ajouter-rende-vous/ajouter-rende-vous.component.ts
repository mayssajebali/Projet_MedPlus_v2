import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { RendezVous } from 'src/app/classes/rendez-vous';
import { PatientService } from 'src/app/services/patient.service';
import { RendezVousService } from 'src/app/services/rendez-vous.service';

@Component({
  selector: 'app-ajouter-rende-vous',
  templateUrl: './ajouter-rende-vous.component.html',
  styleUrls: ['./ajouter-rende-vous.component.css']
})
export class AjouterRendeVousComponent implements OnInit{
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
      lesPatients:[],

    });
    this.patientServ.getAllPatients().subscribe(
      data => {
        this.patients = data;
        if (this.patients.length > 0) {
          this.form.get('lesPatients')?.setValue(this.patients[0]);
        }
      },
      error => console.error('Error fetching patients:', error)
    );
  
    this.rdvService.getrv().subscribe(data=>this.rvs=data);
    this.rdvService.getPatient(this.id).subscribe(data=>this.pat=data);
 
  }

  
  
    
  currentDate: Date = new Date(2024, 3, 29);
  ondelete(e:any){
    if(this.pat.id_patient==e.appointmentData.patient.id_patient)
   { this.rdvService.deleteRdv(e.appointmentData.id_rendez_vous).subscribe(() => {
      console.log('Appointment deleted successfully');
      alert("rendez-vous supprimé avec succès");
    },
    error => {
      console.error('Error deleting appointment:', error);
    }
  );
}
else{
  e.cancel=true;
  alert("impossible de supprimer ce rendez-vous")
}


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
      if(this.heure!=null){
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
        this.pat
      );
      
      this.rdvService.addRdv(rendezVous).subscribe(
        data => {
          if (data!=null){this.rvs.push(data);}
          else{alert("la date est déjà prise")}


          
        },
        error => {
          console.error('Error adding rendezvous:', error);
          
        }
      );}
      else{alert("veuillez sélectionner une date")}
      
    }



    get formattedClickedDate(): string {
      if (!this.clickedDate) {
        return '';
      }
      const year = this.clickedDate.getFullYear();
      const month = ('0' + (this.clickedDate.getMonth() + 1)).slice(-2);
      const date = ('0' + this.clickedDate.getDate()).slice(-2);
      return `${year}-${month}-${date}`;
    }

  
  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  }

}


