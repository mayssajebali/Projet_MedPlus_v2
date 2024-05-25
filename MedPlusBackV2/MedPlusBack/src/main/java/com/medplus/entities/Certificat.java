package com.medplus.entities;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Certificat {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int code_certificat;
	
	private int nbr_jour_repos;

	@Temporal(TemporalType.DATE)
	private Date date_repos;
	
	private String commentaire;
	
	@Temporal(TemporalType.DATE)
	private Date date_creation;
	
	@ManyToOne
	@JoinColumn(name="numero_dossier")
	private DossierMedical dossierMedical;
	
	public int getCode_certificat() {
		return code_certificat;
	}
	public void setCode_certificat(int code_certificat) {
		this.code_certificat = code_certificat;
	}
	public int getNbr_jour_repos() {
		return nbr_jour_repos;
	}
	public void setNbr_jour_repos(int nbr_jour_repos) {
		this.nbr_jour_repos = nbr_jour_repos;
	}
	public Date getDate_repos() {
		return date_repos;
	}
	public void setDate_repos(Date date_repos) {
		this.date_repos = date_repos;
	}
	public String getCommentaire() {
		return commentaire;
	}
	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	
	
	public Certificat(int code_certificat, int nbr_jour_repos, Date date_repos, String commentaire,
			Date date_creation, DossierMedical dossierMedical) {
		super();
		this.code_certificat = code_certificat;
		this.nbr_jour_repos = nbr_jour_repos;
		this.date_repos = date_repos;
		this.commentaire = commentaire;
		this.date_creation = date_creation;
		this.dossierMedical = dossierMedical;
	}
	public Date getDate_creation() {
		return date_creation;
	}
	public void setDate_creation(Date date_creation) {
		this.date_creation = date_creation;
	}
	
	
	public DossierMedical getDossierMedical() {
		return dossierMedical;
	}
	public void setDossierMedical(DossierMedical dossierMedical) {
		this.dossierMedical = dossierMedical;
	}
	public Certificat() {
		this.nbr_jour_repos = 0;
		this.date_repos =null;
		this.commentaire = "";	}
	@Override
	public String toString() {
		return "Certificat [code_certificat=" + code_certificat + ", nbr_jour_repos=" + nbr_jour_repos + ", date_repos="
				+ date_repos + ", commentaire=" + commentaire + "]";
	}
	
	
	
	
}
