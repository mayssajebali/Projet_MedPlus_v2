package com.medplus.services;

import com.medplus.entities.Secretaire;

public interface ISecretaireService {
	public boolean se_connecter(String email, String password);
	public Secretaire creer_compte( Secretaire  secretaire);
	public int getIdSecretaire(String email, String password);
}
