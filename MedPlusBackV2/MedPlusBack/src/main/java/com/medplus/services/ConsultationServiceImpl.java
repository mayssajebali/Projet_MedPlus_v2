package com.medplus.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Certificat;
import com.medplus.entities.Consultation;
import com.medplus.repositories.ConsulationRepository;

@Service
public class ConsultationServiceImpl implements IConsultationService{
	@Autowired
	private ConsulationRepository consultationRepository;

	@Override
	public List<Consultation> getAllConsultationsByPatient(int idPatient) {
		// TODO Auto-generated method stub
       
		List<Consultation> allConsultations = consultationRepository.findAll();
        List<Consultation> consultationByPatient = new ArrayList<>();

        for (Consultation consultation : allConsultations) {
            if (consultation.getPatient_id() == idPatient) {
                consultationByPatient.add(consultation);
            }
        }
        
        return consultationByPatient;
	}

	@Override
	public List<Consultation> getCertificatsByDate(Date date, int id) {
		// TODO Auto-generated method stub
		List<Consultation> c = new ArrayList<Consultation>();
		
		for (Consultation ce :consultationRepository.findAll()) {
			if(ce.getDate_consultation().equals(date)) {
				c.add(ce);
				
			}
		}
		return c;
	}

	@Override
	public List<Consultation> getAllConsultations() {
		// TODO Auto-generated method stub
		return consultationRepository.findAll();
		}
	
	
	
	
	
	

	
	}
