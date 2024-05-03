import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from 'src/app/classes/login';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router:Router ,private authService:AuthServiceService,private http : HttpClient){ }

  // onAuth(user:string,pwd:string){
  //       if(this.authService.login(user,pwd))
  //       this.router.navigate(['/dash-medecin']);
  //     else
  //     alert("erreur:login ou mot de passe incorrecte");
  // }

  email !:string;
  mdp !: string;
  login() {
    let l = new Login(this.email, this.mdp, false);
    this.http.post('http://localhost:8086/login', l).subscribe(data => {
        console.log(data);
          if (data === true) {
            this.router.navigate(['/dash-medecin']);
        } else {
          alert("erreur:login ou mot de passe incorrecte");
        }
    });
}
}