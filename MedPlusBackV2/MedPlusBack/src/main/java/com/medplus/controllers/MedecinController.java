package com.medplus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Medecin;
import com.medplus.services.IMedecinService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedecinController {
	
	@Autowired
	private IMedecinService iMedecinService;
	
	@GetMapping("medecin/{id}")
	public Medecin getMedecinById(@PathVariable("id") int id) {
		return iMedecinService.getMedecinById(id);
	}
	
	@PutMapping("medecin/{id}")
	public Medecin updateMedecin(@RequestBody Medecin m,@PathVariable("id") int id) {
		return iMedecinService.updatemedecin(m, id);
	}
	   @PostMapping("medecin/register")
	    public Medecin creer_compte(@RequestBody Medecin medecin) {
		   return iMedecinService.creer_compte(medecin);
	     
	    }

	    @GetMapping("medecin/login")
	    public boolean se_connecter(@RequestParam("email") String email,@RequestParam("password") String password) {
	    	return iMedecinService.se_connecter(email, password);
	    
	    }
	    

	    @GetMapping("medecin")
	    public int getIdPatient(@RequestParam("email") String email,@RequestParam("password") String password) {
	    	return iMedecinService.getIdPatient(email, password);
	    }
}
