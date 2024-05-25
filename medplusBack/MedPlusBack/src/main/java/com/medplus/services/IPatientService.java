package com.medplus.services;

import java.util.List;
import java.util.Optional;

import com.medplus.entities.Discussion;
import com.medplus.entities.DossierMedical;
import com.medplus.entities.Patient;

public interface IPatientService {
	public List<Patient> getAllPatient();
	public List<Patient> getPatientAvecDiscussions();
	public Patient getPatientById(int id);
	public Patient creer_compte( Patient patient);
	public List<Discussion> getDiscussionsByPatientId(int patientId);
	public int getIdPatient(String email, String password);
	public Patient updatePatient(Patient p,int id);
	public boolean se_connecter(String email, String password);
	
}
