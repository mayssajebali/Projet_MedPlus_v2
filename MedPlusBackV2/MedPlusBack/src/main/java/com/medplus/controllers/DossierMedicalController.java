package com.medplus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.services.IDossierMedical;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DossierMedicalController {
	@Autowired
	private IDossierMedical iDossierMedical;
	
	@GetMapping("dossier/{id}")
	public int getDossier(@PathVariable("id") int id) {
		return iDossierMedical.getDossierPatient(id);
	}

}
