package com.medplus.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.RendezVous;
import com.medplus.repositories.RendezVousRepository;

@Service
public class RendezVousServiceImpl implements IRendezVousService{
	@Autowired
	private RendezVousRepository rvRep;

	@Override
	public RendezVous ajout(RendezVous rv) {
		LocalDate d = rv.getStartDate().toLocalDateTime().toLocalDate();
		//LocalDateTime timestamp1 = LocalDateTime.of(rv.getStartDate());
		//Timestamp d=rv.getStartDate();
		List<RendezVous> rvs=rvRep.findAll();
		for (RendezVous rendezVous : rvs) {
			LocalDate drv = rendezVous.getStartDate().toLocalDateTime().toLocalDate();
			int c1 = 1,c2 = -1,c3 = 1,c4 = -1;
			if(d.equals(drv))
				c1 =rv.getStartDate().compareTo(rendezVous.getEndDate());
			    c2 =rv.getStartDate().compareTo(rendezVous.getStartDate());
			    c3 =rv.getEndDate().compareTo(rendezVous.getEndDate());
			    c4 =rv.getEndDate().compareTo(rendezVous.getStartDate());
				
				if((c1<=0 && c2>=0)||(c3<=0 && c4>=0))
						return null;
		}
		return rvRep.save(rv);
	}

	@Override
	public List<RendezVous> getAll() {
		List <RendezVous> rvs=rvRep.findAll();
		return rvs;
	}

	@Override
	public boolean delete(int id) {
		rvRep.deleteById(id);
		return !rvRep.existsById(id);
	}

}
