package com.medplus.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.medplus.entities.Discussion;
import com.medplus.entities.Patient;

import com.medplus.services.IPatientService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
	
	@Autowired
	private IPatientService iPatientService;
	
	@GetMapping("/patients")
	public List<Patient> allPatients(){
		return iPatientService.getAllPatient();
	}
	@GetMapping("/patientsDiscutees")
	public List<Patient> patientDiscussion(){
		return iPatientService.getPatientAvecDiscussions();
	}

	@GetMapping("/patients/{id}")
	public Patient getOne(@PathVariable("id") int id){
		return iPatientService.getPatientById(id);
	}
	
	@PostMapping("/patients")
	public Patient createPatient(@RequestBody Patient p) {
		return iPatientService.creer_compte(p);
	}
	
	@GetMapping("/discussionsPatient/{id}")
	public List <Discussion> getDiscussions(@PathVariable int id){
		return iPatientService.getDiscussionsByPatientId(id);
	}
    @GetMapping("patient/login")
    public boolean se_connecter(@RequestParam("email") String email,@RequestParam("password") String password) {
    	return  iPatientService.se_connecter(email,password);
      
       
    }
    @PutMapping("patients/{id}")
    public Patient updatePatient(@RequestBody Patient p,@PathVariable("id") int id) {
    	return iPatientService.updatePatient(p, id);
    }
    @GetMapping("patient")
    public int getIdPatient(@RequestParam("email") String email,@RequestParam("password") String password) {
    	return iPatientService.getIdPatient(email, password);
    }
    
    @PostMapping("patient/register")
    public Patient creer_compte(@RequestBody Patient patient) {
   	  return iPatientService.creer_compte(patient);
       
   }
}
