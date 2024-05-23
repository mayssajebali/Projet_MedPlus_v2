import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  //selectedDate!: Date;
  //  appointments: RendezVous[] = [
  //   {
  //     id_rendez_vous:1,
     
  //     startDate: new Date('2024-04-27T16:30:00.000Z'),
  //     endDate: new Date('2024-04-27T18:30:00.000Z'),
     // heure:3,
      // text: 'patient amir pneumonie',
      
      //allDay: true,
    // }, {
    //   id_rendez_vous:2,
      
    //   startDate: new Date('2024-04-24T19:00:00.000Z'),
    //   endDate: new Date('2024-04-24T20:00:00.000Z'),
      //heure:3,
      // text: 'patient emna grippe',
     
      //allDay: true,
    // }]
  patientsTest:Patient[]=[];
  patients:Patient[]=[];
  //appointmentsData!: RendezVous[];
  constructor(private rdvService:RendezVousService,private fb:FormBuilder,private patientServ:PatientService){}
  ngOnInit(): void {
    this.form=this.fb.group({
     // heure:[5],
      text:['pnemonie'],
      lesPatients:[],
      //dateRdv: ['2024-01-01T00:00'], 
      //enddate: []
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
    // this.patientsTest=this.patientServ.getPatientsTest();
    // this.patientServ.getPatients().subscribe(data=>this.patients=data);
    this.rdvService.getrv().subscribe(data=>this.rvs=data);
    this.rdvService.getPatient(2).subscribe(data=>this.pat=data);
    // this.patientServ.getrv().subscribe(data => {
    //   data.forEach(rv => {
    //     this.appointments.push(new RendezVous(rv.id_rendez_vous, new Date(rv.startDate), new Date(rv.endDate), rv.heure, rv.text));
    //   });
    // });
  }
    //this.http.get('http://localhost:8084/rendezvous').subscribe( data => console.log(data));

  
  
    
  currentDate: Date = new Date(2024, 3, 29);
  ondelete(e:any){
    this.rdvService.deleteRdv(e.appointmentData.id_rendez_vous).subscribe(() => {
      console.log('Appointment deleted successfully');
      // Optionally, perform any additional actions upon successful deletion
    },
    error => {
      console.error('Error deleting appointment:', error);
      // Optionally, display an error message to the user
    }
  );
 // alert("delete")

  }
  
  disableAllCells(data: any) {
    this.clickedDate= data.cellData.startDate;
    //const formattedDate = this.formatDateTimeLocal(this.clickedDate);
    //const isoDateString: string = this.clickedDate.toISOString();
    data.cancel = true;
    this.debutDate=this.clickedDate; // Cancel the default behavior (opening the appointment form)
    this.seen=!this.seen;
    //this.form.get('dateRdv')?.patchValue(this.clickedDate);
  }
  disableAppointmentForm(data: any) {
    data.cancel = true; // Cancel the default behavior (opening the appointment form)
    alert("form")  }
  onReset(){
    this.form.reset();
  }
  ajoutRDv(){
    
    // let l = new RendezVous(20,this.debutDate, this.finDate,this.heure,this.text);
    // this.patientServ.addRdv(l).subscribe(data => this.rvs.push(data)  );
    // this.seen=!this.seen;

    
    // this.form.get('startdate')?.setValue(this.clickedDate);
    //console.log(this.form.get('startdate')?.value);
    
    

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

    // this.form.get('dateRdv')?.patchValue(selectedDate.toISOString().slice(0, 16)); // Truncate milliseconds and timezone info
      //this.form.get('enddate')?.patchValue(endDate.toISOString().slice(0, 16)); // Truncate milliseconds and timezone info

      
      //let p=new RendezVous(0,this.form.get('startdate')?.value,this.form.get('enddate')?.value,this.form.get('heure')?.value,this.form.get('text')?.value);
      //let p=new RendezVous(0,this.form.get('startdate')?.value,this.form.get('enddate')?.value,this.form.get('heure')?.value,this.form.get('text')?.value);
      //const rv=(this.form.get('startdate')?.value,this.form.get('enddate')?.value,this.form.get('heure')?.value,this.form.get('text')?.value);
      const rendezVous = new RendezVous(
        0, // Assuming 0 is a placeholder for ID when creating a new rendezvous
        selectedDate, // Convert start date to ISO string
      
        endDate, // Convert end date to ISO string
        //this.form.get('heure')?.value,
        this.form.get('text')?.value,
        this.pat
      );
      //this.patientServ.addRdv(rendezVous).subscribe(data=>this.rvs.push(data));
      
      this.rdvService.addRdv(rendezVous).subscribe(
        data => {
          if (data!=null){this.rvs.push(data);}
          
        },
        error => {
          // If addition fails, handle the error
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
  // cellTemplate: any = (data: any, index: number, element: any) => {
  //   element.textContent = data.text;
  //   if (!this.isDateAvailable(data.date)) {
  //     element.style.backgroundColor = 'lightgray'; // Style the cell for unavailable dates
  //   }
  // };
  getCellStyles(date: Date): any {
    if (!this.isDateAvailable(date)) {
      return { backgroundColor: 'red' }; // Style the cell for unavailable dates
    }
    return {}; // Return empty style for available dates
  }
  


}

