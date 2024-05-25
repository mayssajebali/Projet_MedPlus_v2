package com.medplus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Secretaire;
import com.medplus.services.ISecretaireService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SecretaireController {

    @Autowired
    private ISecretaireService secretaireService;

    @PostMapping("secretaire/register")
    public Secretaire creer_compte(@RequestBody Secretaire secretaire) {
     	  return secretaireService.creer_compte(secretaire);
         
     }

   
    @GetMapping("secretaire/login")
    public boolean se_connecter(@RequestParam("email") String email,@RequestParam("password") String password) {
    	  
    	return  secretaireService.se_connecter(email, password); 
    }
    
    @GetMapping("secretaire")
    public int getIdPatient(@RequestParam("email") String email,@RequestParam("password") String password) {
    	return secretaireService.getIdSecretaire(email, password);
    }
}