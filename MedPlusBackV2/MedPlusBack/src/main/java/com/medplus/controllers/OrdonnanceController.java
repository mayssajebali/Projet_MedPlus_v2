package com.medplus.controllers;
import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Medicament;
import com.medplus.entities.Ordonnance;
import com.medplus.services.IOrdonnanceService;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrdonnanceController {
 
	    @Autowired
	    private IOrdonnanceService ordonnanceService;
	    

	    @GetMapping("/ordonnancespatient/{id}")
	    public List<Ordonnance> getOrdonnancesByPatient(@PathVariable("id") int id) {
	        return ordonnanceService.getAllOrdonnancesByPatient(id);
	    }
	    
	    
	    @GetMapping("/medicamentsByPatient/{id}")
	    public List<Medicament> findMedicamentsByidPatient(@PathVariable("id") int id) {
	        return ordonnanceService.findMedicamentsByidPatient(id);
	    }
	    
	    @GetMapping("/medicamentsByOrdonnanceByPatient/{idord}/{idPatient}")
	    public List<Medicament> findMedicamentsByOrdonnanceByidPatient(@PathVariable("idord") int idord, @PathVariable("idPatient") int idPatient) {
	        return ordonnanceService.findMedicamentsByOrdonnanceByidPatient(idord, idPatient);
	    }
	    
	    @GetMapping("/lesmedicamentsOrdonnances/{id}")
	    public List<Medicament> findMedicamentsByiordonnance(@PathVariable("id") int id){
	    	return ordonnanceService.findMedicamentsByiordonnance(id);
	    }
	    
	    
	    

	    @GetMapping("/ordonnances/{id}")
	    public Ordonnance getOrdonnanceById(@PathVariable int id) {
	        return ordonnanceService.getOrdonnanceById(id);
	    }

	    @PostMapping("/ordonnances/{id}")
	    public Ordonnance addOrdonnance(@RequestBody Ordonnance ordonnance,@PathVariable("id") int id) {
	    	return ordonnanceService.addOrdonnance(ordonnance,id);
	    }

	    @PutMapping("/ordonnances/{id}")
	    public Ordonnance updateOrdonnance(@PathVariable int id, @RequestBody Ordonnance ordonnance) {
	        return ordonnanceService.updateOrdonnance(id, ordonnance);
	    }

	    @DeleteMapping("/ordonnances/{id}")
	    public void deleteOrdonnance(@PathVariable int id) {
	        ordonnanceService.deleteOrdonnance(id);
	    }
	    
	    
	    @GetMapping("/ordonnances/search/{id}")
	    public List<Ordonnance> searchOrdonnancesByDate(@RequestParam("date") Date date, @PathVariable("id") int id) {
	        return ordonnanceService.findByDate(date,id);
	    }
	    

}
