import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/classes/medecin';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-medecin-profile',
  templateUrl: './medecin-profile.component.html',
  styleUrls: ['./medecin-profile.component.css']
})
export class MedecinProfileComponent implements OnInit{
  medecin!: Medecin;
id:number=0;
  constructor(private medecinService:MedecinService,private router:Router ,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.loadMedecin(this.id );
    });
  }
  loadMedecin(id: number): void {
    this.medecinService.getMedecintById(id).subscribe((data: Medecin) => {
        this.medecin = data;
      }, (error) => {
        console.log('Erreur lors du chargement du médecin : ', error);
      });
  }
  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  } 

}
