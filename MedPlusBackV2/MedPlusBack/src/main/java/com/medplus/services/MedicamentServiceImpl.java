package com.medplus.services;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Medicament;
import com.medplus.repositories.MedicamentRepository;


@Service
public class MedicamentServiceImpl implements IMedicamentService{

	    @Autowired
	    private MedicamentRepository medicamentRepository;
	  

		@Override
		public List<Medicament> getAllMedicaments() {
			return medicamentRepository.findAll();
		}
		
		

		@Override
		public Medicament getMedicamentById(int id) {
			// TODO Auto-generated method stub
			Optional<Medicament> o = medicamentRepository.findById(id);
			if(o.isPresent()) { 
				return o.get();
			}
			
			else {
				return null;
			}
		}

		@Override
		public Medicament addMedicament(Medicament medicament) {
			// TODO Auto-generated method stub
			return medicamentRepository.save(medicament);
		}

		@Override
		public Medicament updateMedicament(int id, Medicament medicament) {
			// TODO Auto-generated method stub
		    medicament.setId(id);
	        return medicamentRepository.save(medicament);
		}

		@Override
		public void deleteMedicament(int id) {
			// TODO Auto-generated method stub
			  medicamentRepository.deleteById(id);
		}



/*		@Override
		public List<Medicament> getAllMedicamentByOrdonannce(int idord){

			// TODO Auto-generated method stub
			
			return medicamentRepository.getAllMedicamentByOrdonannce(idord);
		
		}*/

		
	 
	

	
	
}
