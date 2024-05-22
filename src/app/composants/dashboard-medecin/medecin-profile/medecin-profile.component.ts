import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/classes/medecin';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-medecin-profile',
  templateUrl: './medecin-profile.component.html',
  styleUrls: ['./medecin-profile.component.css']
})
export class MedecinProfileComponent implements OnInit{
  medecin!: Medecin;

  constructor(private medecinService:MedecinService,private router:Router){}
  ngOnInit(): void {
    this.loadMedecin(1001);
  }
  loadMedecin(id: number): void {
    this.medecinService.getMedecintById(id).subscribe((data: Medecin) => {
        this.medecin = data;
      }, (error) => {
        console.log('Erreur lors du chargement du médecin : ', error);
      });
  }


}
