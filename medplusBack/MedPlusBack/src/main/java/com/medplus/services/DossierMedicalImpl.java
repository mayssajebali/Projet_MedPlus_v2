package com.medplus.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.DossierMedical;
import com.medplus.repositories.DossierMedicalRepository;

@Service
public class DossierMedicalImpl implements IDossierMedical{
	@Autowired
	private DossierMedicalRepository dossierMedicalRepository;
	


	@Override
	public int getDossierPatient(int id) {
		List<DossierMedical> dossier=dossierMedicalRepository.findAll();
		for(DossierMedical d:dossier) {
			if(d.getPatient().getId_patient()==id) {
				return d.getPatient().getId_patient();
			}
		} 
		return -1;
	}

}
