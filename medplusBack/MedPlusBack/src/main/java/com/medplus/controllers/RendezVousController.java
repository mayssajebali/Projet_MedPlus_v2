package com.medplus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.RendezVous;
import com.medplus.services.IRendezVousService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RendezVousController {
	@Autowired
	private IRendezVousService rvService;
	
	@GetMapping("/rendezvous")
	public List<RendezVous> getAll(){
		return rvService.getAll();}
	@PostMapping("/rendezvous")
	public RendezVous addRdv(@RequestBody RendezVous rv){
		return rvService.ajout(rv);		
	}

	
	@DeleteMapping("/rendezvous/{id}")
	public boolean deleteEtudinat(@PathVariable("id") int id){
		return rvService.delete(id);		
	}
}
