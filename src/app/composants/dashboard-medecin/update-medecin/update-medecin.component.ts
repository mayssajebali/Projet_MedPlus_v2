import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/app/classes/medecin';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent implements OnInit{
  medecin: any = {};
  medecinId!:any;
  fileUpload: any;
  id:number=0;
  constructor(private medecinService:MedecinService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
   this.medecinId=1001;
    this.medecinService.getMedecintById(1001).subscribe(data => {
      this.medecin = data;
    });
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }
 
  onModifier(){
    this.medecinService.UpdateMedecin(this.medecinId,this.medecin).subscribe(
      (data)=>{
        alert("profil mise à jour avec succès");
      },
    );
  }
  triggerFileUpload(): void {
    this.fileUpload.nativeElement.click();
  }

    
   
  AllerVers(path: string): void {
    this.router.navigate([path], { queryParams: { id:this.id} });
  } 


}
