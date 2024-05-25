package com.medplus.entities;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class DossierMedical {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int numero;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id_patient")
	private Patient patient;
	
	@OneToMany(mappedBy="dossierMedical")
	private List<Certificat> certificats=new ArrayList<>();
	
	@OneToMany(mappedBy="dossierMedical")
	private List<Ordonnance> Ordonnances=new ArrayList<>();
	
	public int getNumero() {
		return numero;
	}
	public Patient getPatient() {
		return patient;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	@Override
	public String toString() {
		return "DossierMedical [numero=" + numero + "]";
	}



}
