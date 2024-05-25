package com.medplus.entities;

import java.util.ArrayList;
import java.util.List;


import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Medecin{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_medecin;
	private String nom_medecin;
	private String prenom_medecin;
	private String adresse_medecin;
	private String telephone_medecin;
	
	private String mail_medecin;
	private String mot_de_passe_medecin;
	
	
	public Medecin(int id_medecin, String nom_medecin, String prenom_medecin, String adresse_medecin,
			String telephone_medecin, String mail_medecin, String mot_de_passe_medecin, Calendrier calendrier) {
		super();
		this.id_medecin = id_medecin;
		this.nom_medecin = nom_medecin;
		this.prenom_medecin = prenom_medecin;
		this.adresse_medecin = adresse_medecin;
		this.telephone_medecin = telephone_medecin;
		this.mail_medecin = mail_medecin;
		this.mot_de_passe_medecin = mot_de_passe_medecin;
		this.calendrier = calendrier;
	}
	public String getMail_medecin() {
		return mail_medecin;
	}
	public void setMail_medecin(String mail_medecin) {
		this.mail_medecin = mail_medecin;
	}

	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id_calendrier")
	private Calendrier calendrier;
	
	@ManyToMany(mappedBy="medecins1")
	private List<Patient> patients1=new ArrayList<>();

	@ManyToMany
	@JoinTable(name="consultation",joinColumns= {@JoinColumn(name="medecin_id")},
											inverseJoinColumns= {@JoinColumn(name="patient_id")})
	private List<Patient> patients2=new ArrayList<>();
	public int getId_medecin() {
		return id_medecin;
	}
	public void setId_medecin(int id_medecin) {
		this.id_medecin = id_medecin;
	}
	public String getNom_medecin() {
		return nom_medecin;
	}
	public void setNom_medecin(String nom_medecin) {
		this.nom_medecin = nom_medecin;
	}
	public String getPrenom_medecin() {
		return prenom_medecin;
	}
	public void setPrenom_medecin(String prenom_medecin) {
		this.prenom_medecin = prenom_medecin;
	}
	public String getAdresse_medecin() {
		return adresse_medecin;
	}
	public void setAdresse_medecin(String adresse_medecin) {
		this.adresse_medecin = adresse_medecin;
	}
	public String getTelephone_medecin() {
		return telephone_medecin;
	}
	public void setTelephone_medecin(String telephone_medecin) {
		this.telephone_medecin = telephone_medecin;
	}
	
	
	public String getMot_de_passe_medecin() {
		return mot_de_passe_medecin;
	}
	public void setMot_de_passe_medecin(String mot_de_passe_medecin) {
		this.mot_de_passe_medecin = mot_de_passe_medecin;
	}
	public Medecin() {
		
	}
	@Override
	public String toString() {
		return "Medecin [id_medecin=" + id_medecin + ", nom_medecin=" + nom_medecin + ", prenom_medecin="
				+ prenom_medecin + ", adresse_medecin=" + adresse_medecin + ", telephone_medecin=" + telephone_medecin
				+ ", mail_medecin=" + mail_medecin + ", mot_de_passe_medecin=" + mot_de_passe_medecin + "]";
	}
	
	
	
	
}
