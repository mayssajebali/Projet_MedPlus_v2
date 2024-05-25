package com.medplus.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Secretaire {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_secretaire;
	
	private String nom_secraitaire;
	private String prenom_secraitaire;
	private String mail_secraitaire;
	private String mot_de_passe_secraitaire;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="id_calendrier")
	private Calendrier calendrier;
	
	public int getId_secretaire() {
		return id_secretaire;
	}
	public void setId_secretaire(int id_secretaire) {
		this.id_secretaire = id_secretaire;
	}
	public String getNom_secraitaire() {
		return nom_secraitaire;
	}
	public void setNom_secraitaire(String nom_secraitaire) {
		this.nom_secraitaire = nom_secraitaire;
	}
	public String getPrenom_secraitaire() {
		return prenom_secraitaire;
	}
	public void setPrenom_secraitaire(String prenom_secraitaire) {
		this.prenom_secraitaire = prenom_secraitaire;
	}
	public String getMail_secraitaire() {
		return mail_secraitaire;
	}
	public void setMail_secraitaire(String mail_secraitaire) {
		this.mail_secraitaire = mail_secraitaire;
	}
	public String getMot_de_passe_secraitaire() {
		return mot_de_passe_secraitaire;
	}
	public void setMot_de_passe_secraitaire(String mot_de_passe_secraitaire) {
		this.mot_de_passe_secraitaire = mot_de_passe_secraitaire;
	}
	public Secretaire(String nom_secraitaire, String prenom_secraitaire, String mail_secraitaire,
			String mot_de_passe_secraitaire) {
		this.nom_secraitaire = nom_secraitaire;
		this.prenom_secraitaire = prenom_secraitaire;
		this.mail_secraitaire = mail_secraitaire;
		this.mot_de_passe_secraitaire = mot_de_passe_secraitaire;
	}
	public Secretaire() {
		this.nom_secraitaire = "";
		this.prenom_secraitaire = "";
		this.mail_secraitaire = "";
		this.mot_de_passe_secraitaire = "";
		
	}
	@Override
	public String toString() {
		return "Secretire [id_secretaire=" + id_secretaire + ", nom_secraitaire=" + nom_secraitaire
				+ ", prenom_secraitaire=" + prenom_secraitaire + ", mail_secraitaire=" + mail_secraitaire
				+ ", mot_de_passe_secraitaire=" + mot_de_passe_secraitaire + "]";
	}
	
	
	
	

}
