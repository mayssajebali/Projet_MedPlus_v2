package com.medplus.services;

import java.sql.Date;
import java.util.List;

import com.medplus.entities.Consultation;

public interface IConsultationService {
	
	List<Consultation> getAllConsultationsByPatient(int idPatient);
	List<Consultation> getAllConsultations();
    public List<Consultation> getCertificatsByDate(Date date,int id);
}


