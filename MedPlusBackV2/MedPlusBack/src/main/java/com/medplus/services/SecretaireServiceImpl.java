package com.medplus.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Medecin;
import com.medplus.entities.Secretaire;
import com.medplus.repositories.SecretaireRepository;

@Service
public class SecretaireServiceImpl  implements ISecretaireService{
    @Autowired
    private SecretaireRepository  secretaireRepository;


	@Override
	public boolean se_connecter(String email, String password) {
		// TODO Auto-generated method stub
    	for (Secretaire s : secretaireRepository.findAll()) {
			if(s.getMail_secraitaire().equals(email)) {
				if(s.getMot_de_passe_secraitaire().equals(password)) {
					return true;
				}
				
				
			}
			
		}
    	
    	return false;
	}
@Override
	public Secretaire creer_compte(Secretaire secretaire) {
		// TODO Auto-generated method stub
		return secretaireRepository.save(secretaire);
	}

	 public int getIdSecretaire(String email, String password) {
		for (Secretaire m : secretaireRepository.findAll()) {
			if(m.getMail_secraitaire().equals(email)) {
				if(m.getMot_de_passe_secraitaire().equals(password)) {
					return m.getId_secretaire();
				}
			}
		}
    	return -1;
	}
}


