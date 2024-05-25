package com.medplus.services;


import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Certificat;
import com.medplus.entities.DossierMedical;
import com.medplus.repositories.CertificatRepository;
import com.medplus.repositories.DossierMedicalRepository;

@Service
public class CertificatServiceImpl implements ICertificatService {

	 @Autowired
	 private CertificatRepository certificatRepository;
	 
	 @Autowired
	 private DossierMedicalRepository dossierMedicalRepository;
	
	@Override
	public List<Certificat> getAllCertificats() {
		// TODO Auto-generated method stub
		 return certificatRepository.findAll();
	}


	@Override
	public List<Certificat> getAllCertificatsbyPatient(int id) {
		// TODO Auto-generated method stub
	    List<Certificat> allCertificats = certificatRepository.findAll();
        List<Certificat> certificatsByPatient = new ArrayList<>();

        for (Certificat certificat : allCertificats) {
            if (certificat.getDossierMedical().getPatient().getId_patient() == id) {
                certificatsByPatient.add(certificat);
            }
        }

        return certificatsByPatient;
	}

	@Override
	public List<Certificat> getCertificatsByDate(Date date, int id) {
		// TODO Auto-generated method stub
		List<Certificat> c = new ArrayList<Certificat>();
		
		for (Certificat ce :certificatRepository.findAll()) {
			if(ce.getDate_creation().equals(date)) {
				c.add(ce);
				
			}
		}
		return c;
	}


	@Override
	public Certificat addCertificat(Certificat c, int id_dossier) {
		 Optional<DossierMedical> dossierMedicalOpt = dossierMedicalRepository.findById(id_dossier);

	        if (dossierMedicalOpt.isPresent()) {
	            c.setDossierMedical(dossierMedicalOpt.get());
	            return certificatRepository.save(c);
	        } else {
	            return null;
	        }
	
	}


	@Override
	public void deleteCertificat(int id) {
		certificatRepository.deleteById(id);;
	}

}
