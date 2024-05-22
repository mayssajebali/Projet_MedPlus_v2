import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificat } from '../classes/certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  private certificatsUrl = 'http://localhost:8084/certificats'; 

  constructor(private http: HttpClient) {}
  getCertificatsByPatients(id:number): Observable<Certificat[]> {
    return this.http.get<Certificat[]>(this.certificatsUrl +"/" + id );
  }

  
  getCertificats(): Observable<Certificat[]> {
    return this.http.get<Certificat[]>(this.certificatsUrl);
  }

  searchCertificatsByDate(date: Date, id:number): Observable<Certificat[]> {
    const url = `${this.certificatsUrl}/search/${id}?date=${date}`;
    return this.http.get<Certificat[]>(url);
  }

  addCertificat(certif:Certificat,id:number): Observable<Certificat>{
    return this.http.post<Certificat>(`${this.certificatsUrl}/${id}`, certif); 
  }
}
