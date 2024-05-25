package com.medplus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Medicament;

import com.medplus.services.IMedicamentService;


@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class MedicamentConroller {
	@Autowired
    private IMedicamentService medicamentService;

    @GetMapping("/medicaments")
    public List<Medicament> getAllMedicaments() {
        return medicamentService.getAllMedicaments();
    }
    
 
 /*   @GetMapping("/medicamentsOrdonannce/{id}")
    public List<Medicament> getAllMedicament(@PathVariable("id") int id){
    	return medicamentService.getAllMedicamentByOrdonannce(id);
    	
    	
    }*/

    

    @GetMapping("/medicaments/{id}")
    public Medicament getMedicamentById(@PathVariable int id) {
        return medicamentService.getMedicamentById(id);
    }

    @PostMapping("/medicaments")
    public Medicament addMedicament(@RequestBody Medicament medicament) {
        return medicamentService.addMedicament(medicament);
    }

    @PutMapping("/{id}")
    public Medicament updateMedicament(@PathVariable int id, @RequestBody Medicament medicament) {
        return medicamentService.updateMedicament(id, medicament);
    }

    @DeleteMapping("medicaments/{id}")
    public void deleteMedicament(@PathVariable int id) {
        medicamentService.deleteMedicament(id);
    }
}