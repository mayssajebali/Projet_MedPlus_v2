package com.medplus.entities;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Discussion {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_discussion;
	
	private String message;
	
	private String date_discussion;
	
	private int medecin_id;
	private int patient_id;
	private int id_expediteur;
	private int id_recepteur;
	public int getId_expediteur() {
		return id_expediteur;
	}

	public void setId_expediteur(int id_expediteur) {
		this.id_expediteur = id_expediteur;
	}

	public int getId_recepteur() {
		return id_recepteur;
	}

	public void setId_recepteur(int id_recepteur) {
		this.id_recepteur = id_recepteur;
	}

	public int getMedecin_id() {
		return medecin_id;
	}

	public void setMedecin_id(int medecin_id) {
		this.medecin_id = medecin_id;
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}

	
	public String  getDate_discussion() {
		return date_discussion;
	}

	public void setDate_discussion(String  date) {
		this.date_discussion = date;
	}

	public int getId_discussion() {
		return id_discussion;
	}

	public void setId_discussion(int id_discussion) {
		this.id_discussion = id_discussion;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}


	public Discussion(String message, String date_discussion ) {
		this.message = message;
		this.date_discussion = date_discussion ;
	}
	
	public Discussion() {
		this.message = "";
		this.date_discussion = null;
	}

	@Override
	public String toString() {
		return "Discussion [id_discussion=" + id_discussion + ", message=" + message + ", date_discussion="
				+ date_discussion + "]";
	}
	
}
