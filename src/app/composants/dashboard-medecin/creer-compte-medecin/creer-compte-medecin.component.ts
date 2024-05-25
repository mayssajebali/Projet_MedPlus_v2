import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-creer-compte-medecin',
  templateUrl: './creer-compte-medecin.component.html',
  styleUrls: ['./creer-compte-medecin.component.css']
})
export class CreerCompteMedecinComponent implements OnInit{
  selectedRole: string = '';
  userForm!: FormGroup;
  nom !:string;
  prenom !: string;
  email !:string;
  motDePasse !: string;
  dateNaissance !:Date;
  adresse !: string;
  telephone !:string; 


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,private authService: AuthServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      this.selectedRole = 'medecin';
    });
  this.userForm = this.fb.nonNullable.group({
  
    nom_medecin: ['',[Validators.required]],
    prenom_medecin:['',[Validators.required ]],
    adresse_medecin:['',[Validators.required]],
    telephone_medecin:['',[Validators.required]],
    mail_medecin: ['',[Validators.required ]],
    mot_de_passe_medecin:['',[Validators.required ]], 

  })
  }
  creer_compte() {
    this.authService.register(this.userForm.value,this.selectedRole).subscribe
   ( () => { 
       this.router.navigate(['/login']);
       alert("Inscription réussite");
 })}


}
