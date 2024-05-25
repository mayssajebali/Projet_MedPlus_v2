import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ordonnace } from '../classes/ordonnace';
import { Observable } from 'rxjs';
import { Medicament } from '../classes/medicament';
import { DossierMedical } from '../classes/dossier-medical';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {


  private apiUrl = 'http://localhost:8084'; 

  constructor(private http: HttpClient) { }

  getOrdonnances(id:number): Observable<Ordonnace[]> {
    const url1 = `${this.apiUrl}/ordonnancespatient/${id}`;
    return this.http.get<Ordonnace[]>(url1);
  }

  getOrdonnancesByDate(date: Date,idp:number): Observable<Ordonnace[]> {
    const url = `${this.apiUrl}/ordonnances/search/${idp}?date=${date}`;
    return this.http.get<Ordonnace[]>(url);
  }

  findMedicamentsByOrdonnanceByidPatient(idord:number,idPatient:number): Observable<Medicament[]> {
    const url1 = `${this.apiUrl}/medicamentsByOrdonnanceByPatient/${idord}/${idPatient}`;
    return this.http.get<Medicament[]>(url1);
  }


    getMedicaments(): Observable<Medicament[]> {
    const url1 = `${this.apiUrl}/medicaments`;
    return this.http.get<Medicament[]>(url1);
  }

  addOrdonnance(ordonnance: Ordonnace,id:number): Observable<Ordonnace> {
    return this.http.post<Ordonnace>(`${this.apiUrl}/ordonnances/${id}`, ordonnance);
  }

  getDossierMedical(id:number):Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/dossier/${id}`);
  }
  addMedicament(medicament:Medicament):Observable<Medicament>{
    return this.http.post<Medicament>(`${this.apiUrl}/medicaments`,medicament)
  }

  deleteMedicament(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/medicaments/${id}`);
  }

  deleteOrdonnance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ordonnances/${id}`);
  }
}
