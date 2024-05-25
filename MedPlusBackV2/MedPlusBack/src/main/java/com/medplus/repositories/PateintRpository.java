package com.medplus.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medplus.entities.Discussion;
import com.medplus.entities.Patient;

public interface PateintRpository extends JpaRepository<Patient,Integer>{
	@Query("SELECT p FROM Patient p JOIN Discussion d ON p.id_patient = d.patient_id")
	public List<Patient> getPatients();
	
	@Query("SELECT d FROM Discussion d WHERE d.patient_id = ?1 OR d.medecin_id = ?1")
	public List<Discussion> getDiscussionsPatient(int id);

}
