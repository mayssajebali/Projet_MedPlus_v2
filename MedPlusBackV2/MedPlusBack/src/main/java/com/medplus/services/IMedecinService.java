package com.medplus.services;

import com.medplus.entities.Medecin;

public interface IMedecinService {
	public Medecin getMedecinById(int id);
	public Medecin updatemedecin(Medecin m,int id);
	public boolean se_connecter(String email, String password);
	public Medecin creer_compte( Medecin medecin);
	public int getIdPatient(String email, String password);
}
