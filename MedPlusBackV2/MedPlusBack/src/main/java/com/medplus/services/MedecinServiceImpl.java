package com.medplus.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Medecin;
import com.medplus.entities.Patient;
import com.medplus.repositories.MedecinRepository;

@Service
public class MedecinServiceImpl implements IMedecinService{

	@Autowired
	private MedecinRepository medecinRepository;
	
	@Override
	public Medecin getMedecinById(int id) {
		Optional<Medecin> m=medecinRepository.findById(id);
		if(m.isPresent())
			return m.get();
		return null;
	}

	@Override
	public Medecin updatemedecin(Medecin m, int id) {
		m.setId_medecin(id);
		medecinRepository.save(m);
		return medecinRepository.findById(id).get();
	}
	
	@Override
	public boolean se_connecter(String email, String password) {
		// TODO Auto-generated method stub
    	for (Medecin m : medecinRepository.findAll()) {
			if(m.getMail_medecin().equals(email)) {
				if(m.getMot_de_passe_medecin().equals(password)) {
					return true;
				}	
				
			}
			
		}
    	
    	return false;
	}
	 public int getIdPatient(String email, String password) {
			for (Medecin m : medecinRepository.findAll()) {
				if(m.getMail_medecin().equals(email)) {
					if(m.getMot_de_passe_medecin().equals(password)) {
						return m.getId_medecin();
					}
				}
			}
	    	return -1;
		}
	@Override
	public Medecin creer_compte(Medecin medecin) {
		// TODO Auto-generated method stub
		return medecinRepository.save(medecin);
	}


}
