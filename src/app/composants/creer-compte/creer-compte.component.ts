import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent {
  cin !:string;
  nom !:string;
  prenom !: string;
  email !:string;
  motDePasse !: string;
  dateNaissance !:Date;
  adresse !: string;
  telephone !:string;
  sexe !: string;
 

 


  constructor (private router:Router,private http: HttpClient) { }

  onAccueil(){
    this.router.navigate(['/dash-medecin']);
  }

 

  onSignup() {

    const formData = {
      cin: this.cin,
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      motDePasse: this.motDePasse,
      dateNaissance: this.dateNaissance,
      adresse: this.adresse,
      telephone: this.telephone,
      sexe: this.sexe
    };


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

this.http.post("http://localhost:8086/users", formData, httpOptions).subscribe(
  data => { console.log('Inscription réussie', data) },
  error => {
    console.error("Erreur lors de l'inscription", error);
  })

  }


}
