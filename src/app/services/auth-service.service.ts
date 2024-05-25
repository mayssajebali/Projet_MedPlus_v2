import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) { }

  public register(user: any, userType: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/${userType}/register`, user);
  }


  public login(email:string,password:string, userType: string): Observable<any> {
    const url = `${this.baseUrl}/${userType}/login?email=${email}&password=${password}`;
    return this.http.get<any>(url);
  }


  public findIdPatient(email:string,password:string): Observable<number> {
    const url = `${this.baseUrl}/patient?email=${email}&password=${password}`;
    return this.http.get<number>(url);
  }
  public findIdMedecin(email:string,password:string): Observable<number> {
    const url = `${this.baseUrl}/medecin?email=${email}&password=${password}`;
    return this.http.get<number>(url);
  }

  public findIdSecretaire(email:string,password:string): Observable<number> {
    const url = `${this.baseUrl}/secretaire?email=${email}&password=${password}`;
    return this.http.get<number>(url);
  }
}
