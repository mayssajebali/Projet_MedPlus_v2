import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router:Router ,private authService:AuthServiceService){ }

  onAuth(user:string,pwd:string){
        if(this.authService.login(user,pwd))
        this.router.navigate(['/dash-medecin']);
      else
      alert("erreur:login ou mot de passe incorrecte");
  }
}
