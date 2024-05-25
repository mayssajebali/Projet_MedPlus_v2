package com.medplus.services;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.DossierMedical;
import com.medplus.entities.Medicament;
import com.medplus.entities.Ordonnance;
import com.medplus.repositories.DossierMedicalRepository;
import com.medplus.repositories.OrdonnanceRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Service
public class OrdonnanceServiceImpl implements IOrdonnanceService {
	
    @Autowired
    private OrdonnanceRepository ordonnanceRepository;
    
    @Autowired
    private DossierMedicalRepository dossierMedicalRepository;
    
    @PersistenceContext
    private EntityManager entityManager;
    
    
    
    @Override
	public List<Ordonnance> getAllOrdonnancesByPatient(int id) {
		// TODO Auto-generated method stub
    	List<Ordonnance> allOrdonnances = ordonnanceRepository.findAll();
        List<Ordonnance> ordonnancesByPatient = new ArrayList<>();

        for (Ordonnance ordonnance : allOrdonnances) {
        	if(ordonnance.getDossierMedical()!=null)
            if (ordonnance.getDossierMedical().getPatient().getId_patient() == id) {
                ordonnancesByPatient.add(ordonnance);
            }
        }
        
        return ordonnancesByPatient;
	}



	@Override
	public Ordonnance getOrdonnanceById(int id) {
		// TODO Auto-generated method stub
		Optional<Ordonnance> o = ordonnanceRepository.findById(id);
		if(o.isPresent()) { 
			return o.get();
		}
		
		else {
			return null;
		}
	}

	@Override
	public Ordonnance addOrdonnance(Ordonnance ordonnance,int id_dossier) {
        Optional<DossierMedical> dossierMedicalOpt = dossierMedicalRepository.findById(id_dossier);

        if (dossierMedicalOpt.isPresent()) {
            ordonnance.setDossierMedical(dossierMedicalOpt.get());
            return ordonnanceRepository.save(ordonnance);
        } else {
            return null;
        }
	}

	@Override
	public Ordonnance updateOrdonnance(int id, Ordonnance ordonnance) {
		// TODO Auto-generated method stub
		    ordonnance.setId(id);
	        return ordonnanceRepository.save(ordonnance);
	}

	@Override
	public void deleteOrdonnance(int id) {
		// TODO Auto-generated method stub
		 ordonnanceRepository.deleteById(id);
	}

	@Override
	public List<Ordonnance> findByDate(Date date,int idp) {
		// TODO Auto-generated method stub
		List<Ordonnance> o = new ArrayList<Ordonnance>();
		
		for (Ordonnance or : this.getAllOrdonnancesByPatient(idp)) {
			if(or.getDate_creation().equals(date)) {
				o.add(or);
				
			}
		}
		return o;
	}



	@Override
	public List<Medicament> findMedicamentsByiordonnance(int id) {
		// TODO Auto-generated method stub
		List<Medicament> l = ordonnanceRepository.findById(id).get().getMedicaments();
		return l;
	}



	@Override
	public List<Medicament> findMedicamentsByidPatient(int id) {

		TypedQuery<Ordonnance> query = entityManager.createQuery(
	            "SELECT o FROM Ordonnance o WHERE o.dossierMedical.patient.id_patient = :id", Ordonnance.class);
	        query.setParameter("id", id);
	        List<Ordonnance> ordonnances = query.getResultList();
	        System.out.println(ordonnances);
	        // Collect all medications from the retrieved ordonnances
	        List<Medicament> medications = new ArrayList<>();
	        for (Ordonnance ordonnance : ordonnances) {
	            medications.addAll(ordonnance.getMedicaments());
	        }
	        
	        return medications;
	    }
	
	
	@Override
	public List<Medicament> findMedicamentsByOrdonnanceByidPatient(int idOrd, int idPatient) {

		TypedQuery<Ordonnance> query = entityManager.createQuery(
	            "SELECT o FROM Ordonnance o WHERE o.id = :idOrd AND o.dossierMedical.patient.id_patient = :idPatient", Ordonnance.class);
	        query.setParameter("idOrd", idOrd);
	        query.setParameter("idPatient", idPatient);
	        
	        Ordonnance ordonnance = query.getSingleResult();
	        
	        if (ordonnance != null) {
	            return ordonnance.getMedicaments();
	        } else {
	            return Collections.emptyList(); // Or handle the case when no Ordonnance is found
	        }
	    }





	


}