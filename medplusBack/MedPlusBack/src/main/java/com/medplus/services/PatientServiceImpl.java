package com.medplus.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.medplus.entities.Discussion;
import com.medplus.entities.DossierMedical;
import com.medplus.entities.Patient;
import com.medplus.repositories.DossierMedicalRepository;
import com.medplus.repositories.PateintRpository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Service
public class PatientServiceImpl implements IPatientService{

	@PersistenceContext
    private EntityManager entityManager;
	
	@Autowired
	private PateintRpository PateintRpository;
	
	
	@Override
	public List<Patient> getPatientAvecDiscussions() {
		// TODO Auto-generated method stub
		return PateintRpository.getPatients();
	}

	@Override
	public Patient getPatientById(int id) {
		Optional<Patient> p =PateintRpository.findById(id);
		if(p.isPresent())
			return p.get();
		return null;
	}
	

    @Override
    public List<Discussion> getDiscussionsByPatientId(int patientId) {
        return PateintRpository.getDiscussionsPatient(patientId);
    }

	@Override
	public Patient creer_compte(Patient p){
		return PateintRpository.save(p);
	}

	@Override
	public List<Patient> getAllPatient(){
		// TODO Auto-generated method stub
		return PateintRpository.findAll();
	}
	
	 public boolean se_connecter(String email, String password) {
	    	for (Patient p : PateintRpository.findAll()) {
				if(p.getEmail().equals(email) && p.getEmail()!=null) {
					if(p.getMot_de_passe().equals(password)) {
						return true;
					}			
				}	
			} 	
	    	return false;
	 }
	 public int getIdPatient(String email, String password) {
				for (Patient p : PateintRpository.findAll()) {
					if(p.getEmail().equals(email)) {
						if(p.getMot_de_passe().equals(password)) {
							return p.getId_patient();
						}
					}
				}
		    	return -1;
			}
	@Override
	public Patient updatePatient(Patient p, int id) {
		p.setId_patient(id);
		PateintRpository.save(p);
		return PateintRpository.findById(id).get();
	}


	
}
