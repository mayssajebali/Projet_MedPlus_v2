import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor (private router:Router ,private authService:AuthServiceService,
    private http : HttpClient,private route: ActivatedRoute,private fb:FormBuilder){ }
  selectedRole: string = '';
  id : number = 0;
  patientForm!: FormGroup;
  


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedRole = params['role'];
    });

  
    this.patientForm = this.fb.nonNullable.group({
  
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
     
    })
   

  }

  
  goToSignup(role: string): void {
    if(this.selectedRole=='medecin'){
      this.router.navigate(['/creer-compte-medecin']);
    }
    else if(this.selectedRole=='secretaire'){
      this.router.navigate(['/creer-compte-secretaire']);
    }
  else if(this.selectedRole=='patient'){
    this.router.navigate(['/signup']);
  }
  }


  se_connecter() {
    if(this.selectedRole=='patient'){
      this.authService.findIdPatient(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value).subscribe( data =>{
        this.id = data
      })
    }
    if(this.selectedRole=='medecin'){
      this.authService.findIdMedecin(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value).subscribe( data =>{
        this.id = data
        console.log(data);
      })
    }  
    if(this.selectedRole=='secretaire'){
      this.authService.findIdSecretaire(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value).subscribe( data =>{
        this.id = data
        console.log(data);
      })
    }
    this.authService.login(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value,this.selectedRole).subscribe(data => {
        console.log(data);
          if (data === true && this.selectedRole == 'medecin') {
          
            this.router.navigate(['/dash-medecin'],{ queryParams: { id: this.id }});

           
          }else if(data === true && this.selectedRole == 'patient') {
              
              this.router.navigate(['/dash-patient'],{ queryParams: { id: this.id }});
          }else if(data === true && this.selectedRole == 'secretaire') {
              
              this.router.navigate(['/statistiques-secretaire'],{queryParams: { id: this.id }});
       
        } else {
          alert("login ou mot de passe incorrecte");
        }
    });
}

}