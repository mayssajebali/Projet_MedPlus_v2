package com.medplus.services;

import java.sql.Date;
import java.util.List;

import com.medplus.entities.Medicament;
import com.medplus.entities.Ordonnance;

public interface IOrdonnanceService {
	  public List<Ordonnance>  getAllOrdonnancesByPatient(int id);

	    public Ordonnance getOrdonnanceById(int id);

	    public Ordonnance addOrdonnance(Ordonnance ordonnance,int id);

	    public Ordonnance updateOrdonnance(int id, Ordonnance ordonnance);

	    public void deleteOrdonnance(int id);
	    
	    public List<Ordonnance> findByDate(Date date,int idp);
	    
	    public List<Medicament> findMedicamentsByidPatient(int id);
	    public List<Medicament> findMedicamentsByOrdonnanceByidPatient(int idOrd, int idPatient);
	    
	    public List<Medicament> findMedicamentsByiordonnance(int id);
	    
}
