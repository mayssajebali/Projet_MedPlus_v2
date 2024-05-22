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
  
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
     
    })
   

  }

  
  goToSignup(role: string): void {
    this.router.navigate(['/signup'], { queryParams: { role: role } });
  }



  se_connecter() {
    this.authService.findIdPatient(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value).subscribe( data =>{
      this.id = data
    })

    this.authService.login(this.patientForm.get('email')?.value,this.patientForm.get('password')?.value,this.selectedRole).subscribe(data => {
        console.log(data);
          if (data === true && this.selectedRole == 'medecin') {
          
            this.router.navigate(['/dash-medecin'],{ queryParams: { id: this.id }});

           
          }else if(data === true && this.selectedRole == 'patient') {
              
              this.router.navigate(['/dash-patient'],{ queryParams: { id: this.id }});
          }else if(data === true && this.selectedRole == 'secretaire') {
              
              this.router.navigate(['/dash-secretaire'],{ queryParams: { id: this.id }});
       
        } else {
          alert("login ou mot de passe incorrecte");
        }
    });
}
// let l = new Login(this.email, this.mdp, false);
// this.http.post('http://localhost:8084/login', l).subscribe(data => {
//     console.log(data);
//       if (data === true) {
//         this.router.navigate(['/dash-medecin']);
//     } else {
//       alert("erreur:login ou mot de passe incorrecte");
//     }
// });

  // login(): void {
  //   this.authService.login(this.credentials,this.selectedRole).subscribe(() => {
  //     if (this.selectedRole === 'medecin') {
  //       this.router.navigate(['/dash-medecin']);
  //     } else if (this.selectedRole === 'patient') {
  //       this.router.navigate(['/dash-patient']);
  //     } else if (this.selectedRole === 'secretaire') {
  //       this.router.navigate(['/dash-secretaire']);
  //     }
  //     console.error('Erreur de connexion :',  Error);
  //     alert("erreur:login ou mot de passe incorrecte");
      
  //   });
  // }
}