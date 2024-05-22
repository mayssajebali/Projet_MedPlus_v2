import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/classes/patient';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit{
  selectedRole: string = '';
  userForm!: FormGroup;
  cin !:string;
  nom !:string;
  prenom !: string;
  email !:string;
  motDePasse !: string;
  dateNaissance !:Date;
  adresse !: string;
  telephone !:string;
  sexe !: string;
 

 


  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute,private authService: AuthServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      this.selectedRole = params['role'];
    });
  this.userForm = this.fb.nonNullable.group({
  
    cin:['',[Validators.required]],
    nom: ['',[Validators.required]],
    prenom:['',[Validators.required ]],
    email: ['',[Validators.required ]],
    mot_de_passe:['',[Validators.required ]],
    date_de_naissance: [new Date(),[Validators.required]],
    adresse:['',[Validators.required]],
    telephone:['',[Validators.required]],
    sexe: ['femme',[Validators.required]],
  })
  }



  onAccueil(){
    this.router.navigate(['/dash-medecin']);
  }

  
  creer_compte() {
    this.authService.register(this.userForm.value,this.selectedRole).subscribe
   ( () => {
     if (this.selectedRole == 'medecin') {
       this.router.navigate(['/dash-medecin']);
       alert("Inscription réussite");
     }else if( this.selectedRole == 'patient') {
         this.router.navigate(['/login?role=patient']);
         alert("Inscription réussite");
     }else if(this.selectedRole == 'secretaire') {
         this.router.navigate(['/login?role=secretaire']);
         alert("Inscription réussite ! veuillez se connecter maintenant ");
  
   } else {
     alert("erreur : login ou mot de passe incorrecte");
   }
 })}


}
