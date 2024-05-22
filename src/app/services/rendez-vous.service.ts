import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../classes/rendez-vous';
import { Patient } from '../classes/patient';

const Url= "http://localhost:8084/patients";
const url2="http://localhost:8084/rendezvous";
@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

 // patients:Patient[]=[
  //   new Patient(1,"nom1","prenom1"),
  //   new Patient(2,"nom2","prenom2"),
  //   new Patient(3,"nom3","prenom3"),
  // ]

  constructor(private http:HttpClient) { }
  // getPatientsTest(){
  //   return this.patients;
  // }
  // getPatients():Observable<Patient[]>{
  //   return this.http.get<Patient[]>(Url);
  // }
  getrv():Observable<RendezVous[]>{
    return this.http.get<RendezVous[]>(url2);
  }
  getPatient(id:number):Observable<Patient>{
    return this.http.get<Patient>(Url+"/"+ id);
  }
  addRdv(rv:RendezVous):Observable<RendezVous>{
    return this.http.post<RendezVous>(url2, rv);}
  deleteRdv(id:number){
      return this.http.delete(url2+"/"+ id);
      }
}
