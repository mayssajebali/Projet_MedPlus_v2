import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent {
  constructor (private router:Router){ }

  onAccueil(){
    this.router.navigate(['/dash-medecin']);
  }
}
