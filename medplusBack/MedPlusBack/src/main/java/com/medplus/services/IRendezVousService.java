package com.medplus.services;

import java.util.List;

import com.medplus.entities.RendezVous;

public interface IRendezVousService {
	public RendezVous ajout(RendezVous rv);
	public List<RendezVous> getAll();
	public boolean delete(int id );

}
