package com.medplus.services;
import java.util.List;


import com.medplus.entities.Medicament;
public interface IMedicamentService {
	  public List<Medicament> getAllMedicaments();

	    public Medicament getMedicamentById(int id);

	    public Medicament addMedicament(Medicament medicament);

	    public Medicament updateMedicament(int id, Medicament medicament);

	    public void deleteMedicament(int id);
	    
}
