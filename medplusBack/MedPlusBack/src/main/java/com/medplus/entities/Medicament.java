package com.medplus.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Medicament implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
	
    
	private String nom_medicament;
	
	private float dosage_medicament;
	
	private int nbr_fois_par_jour;
	
	private int duree;
	
	private int ordonnance;
	

	public Medicament() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Medicament(int id, String nom_medicament, float dosage_medicament, int nbr_fois_par_jour, int duree) {
		super();
		this.id = id;
		this.nom_medicament = nom_medicament;
		this.dosage_medicament = dosage_medicament;
		this.nbr_fois_par_jour = nbr_fois_par_jour;
		this.duree = duree;
	
	}


	public int getId() {
		return id;
	}


	public int getOrdonnance() {
		return ordonnance;
	}



	public void setOrdonnance(int ordonnance) {
		this.ordonnance = ordonnance;
	}



	public void setId(int id) {
		this.id = id;
	}


	public String getNom_medicament() {
		return nom_medicament;
	}


	public void setNom_medicament(String nom_medicament) {
		this.nom_medicament = nom_medicament;
	}


	public float getDosage_medicament() {
		return dosage_medicament;
	}


	public void setDosage_medicament(float dosage_medicament) {
		this.dosage_medicament = dosage_medicament;
	}


	public int getNbr_fois_par_jour() {
		return nbr_fois_par_jour;
	}


	public void setNbr_fois_par_jour(int nbr_fois_par_jour) {
		this.nbr_fois_par_jour = nbr_fois_par_jour;
	}


	public int getDuree() {
		return duree;
	}
	public void setDuree(int duree) {
		this.duree = duree;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "Medicament [id=" + id + ", nom_medicament=" + nom_medicament + ", dosage_medicament="
				+ dosage_medicament + ", nbr_fois_par_jour=" + nbr_fois_par_jour + ", duree=" + duree + ", ordonnace " + "]";
	}


}
