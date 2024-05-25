package com.medplus.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.sql.Date;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Patient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_patient;
	
	private String cin;
	private String nom;
	private String prenom;
	

	private String date_de_naissance;
	
	private String adresse;
	
	private String telephone;
	private String sexe;
	
	private String email;
	
	private String mot_de_passe;

	
	@OneToOne(mappedBy="patient")
	private DossierMedical dossierMedical;
	

	@OneToMany(mappedBy="patient")
	private List<RendezVous> LesrendezVous=new ArrayList<>();
	
	@ManyToMany
	@JoinTable(name="discussion",joinColumns= {@JoinColumn(name="patient_id")},
											inverseJoinColumns= {@JoinColumn(name="medecin_id")})
	private List<Medecin> medecins1;	

	
	@ManyToMany(mappedBy="patients1")
	private List<Medecin> medecins2;
	
	public int getId_patient() {
		return id_patient;
	}
	public void setId_patient(int id_patient) {
		this.id_patient = id_patient;
	}
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getDate_de_naissance() {
		return date_de_naissance;
	}
	public void setDate(String date_de_naissance) {
		this.date_de_naissance = date_de_naissance;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getSexe() {
		return sexe;
	}
	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMot_de_passe() {
		return mot_de_passe;
	}
	public void setMot_de_passe(String mot_de_passe) {
		this.mot_de_passe = mot_de_passe;
	}

	public Patient(String cin, String nom, String prenom, String date_de_naissance, String adresse, String telephone,
			String sexe, String mail, String mot_de_passe) {
		this.cin = cin;
		this.nom = nom;
		this.prenom = prenom;
		this.date_de_naissance = date_de_naissance;
		this.adresse = adresse;
		this.telephone = telephone;
		this.sexe = sexe;
		this.email = mail;
		this.mot_de_passe = mot_de_passe;
	
	}
	public Patient() {
		this.cin = "";
		this.nom = "";
		this.prenom = "";
		this.date_de_naissance = null;
		this.adresse = "";
		this.telephone = "";
		this.sexe = "";
		this.email = "";
		this.mot_de_passe = "";
	
	}
	@Override
	public String toString() {
		return "Patient [id_patient=" + id_patient + ", cin=" + cin + ", nom=" + nom + ", prenom=" + prenom
				+ ", date_de_naissance=" + date_de_naissance + ", adresse=" + adresse + ", telephone=" + telephone
				+ ", sexe=" + sexe + ", mail=" + email + ", mot_de_passe=" + mot_de_passe + ", etat_compte=" + "]";
	}

	@Override
	public boolean equals(Object obj) {
		if(obj instanceof Patient) {
			return id_patient == (((Patient)obj).id_patient);
		}else {
			return false;
		}
		
	}
	

	
}
