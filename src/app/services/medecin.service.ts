import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from '../classes/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://localhost:8084';
  
  getMedecintById(id: number): Observable<Medecin> {
    return this.http.get<Medecin>(`${this.baseUrl}/medecin/${id}`);
  }

  UpdateMedecin(id: number,m:Medecin): Observable<Medecin> {
    return this.http.put<Medecin>(`${this.baseUrl}/medecin/${id}`,m);
  }
}
