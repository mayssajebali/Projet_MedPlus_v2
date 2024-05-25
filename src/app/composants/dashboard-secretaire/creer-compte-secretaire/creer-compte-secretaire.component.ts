import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-creer-compte-secretaire',
  templateUrl: './creer-compte-secretaire.component.html',
  styleUrls: ['./creer-compte-secretaire.component.css']
})
export class CreerCompteSecretaireComponent implements OnInit{
  selectedRole: string = '';
  userForm!: FormGroup;
  nom !:string;
  prenom !: string;
  email !:string;
  motDePasse !: string;
  dateNaissance !:Date;
  adresse !: string;
  telephone !:string; 
  id:number=0;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,private authService: AuthServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      this.selectedRole = 'secretaire';
    });
  this.userForm = this.fb.nonNullable.group({
  
    nom_secraitaire: ['',[Validators.required]],
    prenom_secraitaire:['',[Validators.required ]],
    mail_secraitaire:['',[Validators.required]],
    mot_de_passe_secraitaire:['',[Validators.required ]], 

  })
  }
  recupere(path: string): void {
    this.router.navigate(['/dash-patient', path], { queryParams: { id:this.id} });
  }
  creer_compte() {
    this.authService.register(this.userForm.value,this.selectedRole).subscribe
   ( () => { 
       this.router.navigate(['/login',this.selectedRole]);
       alert("Inscription réussite");
 })}


}

