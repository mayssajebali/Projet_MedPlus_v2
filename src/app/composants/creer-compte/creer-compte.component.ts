import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  dateNaissance !:string;
  adresse !: string;
  telephone !:string;
  sexe !: string;




  formData = {
    cin: this.cin,
    nom: this.nom,
    prenom:this.prenom,
    email : this.email,
    motDePasse : this.motDePasse,
    dateNaissance : this.dateNaissance,
    adresse : this.dateNaissance,
    telephone : this.telephone,
    sexe : this.sexe,
  
    
  };



  constructor (private router:Router,private http: HttpClient) { }

  onAccueil(){
    this.router.navigate(['/dash-medecin']);
  }

 

  onSignup() {
    this.http.post('/api/signup', this.formData).subscribe(response => {
      console.log('Inscription réussie', response);
      // Afficher un message à l'utilisateur ou rediriger vers une autre page
    }, error => {
      console.error("Erreur lors de l'inscription", error);
      // Gérer les erreurs côté frontend
    });

  }
}
