import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultation } from '../classes/consultation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

 
  private Url = 'http://localhost:8084/consultations'; 

  constructor(private http: HttpClient) {}
  getConsultationsByPatients(id:number): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.Url +"/" + id );
  }

  searchConsultationsByDate(date: Date, id:number): Observable<Consultation[]> {
    const url = `${this.Url}/search/${id}?date=${date}`;
    return this.http.get<Consultation[]>(url);
  }

  getAllConsultations():Observable<Consultation[]> {
    return this.http.get<Consultation[]>(this.Url);
  }
}
