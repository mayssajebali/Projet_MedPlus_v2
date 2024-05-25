package com.medplus.controllers;


import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Certificat;
import com.medplus.entities.Consultation;
import com.medplus.services.IConsultationService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ConsultationController {
	
	@Autowired
	private IConsultationService consultationService;
	
	
	
	@GetMapping("/consultations/{id}")
	public List<Consultation> getAllConsultationsByPatient(@PathVariable("id") int idPatient){
		

		return consultationService.getAllConsultationsByPatient(idPatient);
	}
	
	
    @GetMapping("/consultations/search/{id}")
    public List<Consultation> searchConsultationsByDate(@RequestParam("date") Date date, @PathVariable("id") int id) {
        return consultationService.getCertificatsByDate(date, id);
    }
    @GetMapping("/consultations")
    public List<Consultation> getAllConsultations() {
        return consultationService.getAllConsultations();
    }
    
}
