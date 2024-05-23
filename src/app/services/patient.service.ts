import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../classes/patient';
import { Discussion } from '../classes/discussion';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient,private zone: NgZone) { }
  private baseUrl = 'http://localhost:8084';
  private sseUrl = 'http://localhost:8084/stream-sse';


  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patients`);
  }

  getPatientsDiscussions(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/patientsDiscutees`);
  }
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/patients/${id}`);
  }

  getDiscussionsByPatientId(patientId: number): Observable<Discussion[]> {
    return this.http.get<Discussion[]>(`${this.baseUrl}/discussionsPatient/${patientId}`);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.baseUrl, patient);
  }

  addDiscussion(newDiscussion: Discussion): Observable<Discussion> {
    return this.http.post<Discussion>(`${this.baseUrl}/discussions`, newDiscussion);
  }

  getServerSentEvent(url: string): Observable<string> {
    return new Observable<string>(observer => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = event => {
        this.zone.run(() => {
          observer.next(event.data);
        });
      };

      eventSource.onerror = error => {
        this.zone.run(() => {
          observer.error(error);
        });
      };

      return () => eventSource.close();
    });
  }

  getAllDiscussions(): Observable<string> {
    return this.getServerSentEvent(this.sseUrl);
  }
  public modifierProfil(p:Patient ,id: number): Observable<Patient> {
    const url = `${this.baseUrl}/patients/${id}`;
    return this.http.get<Patient>(url);
  }
  
  getDiscussions():Observable <Discussion[]>{
    return this.http.get<Discussion[]>(`${this.baseUrl}/discussions`);
  }

}
