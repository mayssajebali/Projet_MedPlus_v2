package com.medplus.controllers;


import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Certificat;
import com.medplus.services.ICertificatService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CertificatController {
	
    @Autowired
    private ICertificatService certificatService;

    @GetMapping("/certificats")
    public List<Certificat> getCertificats() {
        return certificatService.getAllCertificats();
    }

    @GetMapping("/certificats/search/{id}")
    public List<Certificat> searchCertificatsByDate(@RequestParam("date") Date date, @PathVariable("id") int id) {
        return certificatService.getCertificatsByDate(date,id);
    }
    
    
    @GetMapping("/certificats/{id}")
    public List<Certificat> getAllCertificatsbyPatient(@PathVariable("id") int id) {
    	return certificatService.getAllCertificatsbyPatient(id);
    	
    }
    
    @PostMapping("certificats/{id}")
    public Certificat addCertificat(@RequestBody Certificat c,@PathVariable("id") int id) {
    	return certificatService.addCertificat(c, id);  
    	}
   
    @DeleteMapping("certificats/{id}")
    public void deleteMedicament(@PathVariable int id) {
    	certificatService.deleteCertificat(id);
    }
}
