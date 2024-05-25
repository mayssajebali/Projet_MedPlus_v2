package com.medplus.entities;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Consultation {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_consultation;
	

	private Date date_consultation;
	
	private String diagnostic;
	
	
	private int patient_id;

	public int getId_consultation() {
		return id_consultation;
	}

	public void setId_consultation(int id_consultation) {
		this.id_consultation = id_consultation;
	}

	public Date getDate_consultation() {
		return date_consultation;
	}

	public void setDate_consultation(Date date_consultation) {
		this.date_consultation = date_consultation;
	}

	public String getDiagnostic() {
		return diagnostic;
	}

	public void setDiagnostic(String diagnostic) {
		this.diagnostic = diagnostic;
	}

	public Consultation(Date date_consultation, String diagnostic) {
		this.date_consultation = date_consultation;
		this.diagnostic = diagnostic;
	}

	public Consultation() {
		this.date_consultation =null;
		this.diagnostic = "";	}

	@Override
	public String toString() {
		return "Consultation [id_consultation=" + id_consultation + ", date_consultation=" + date_consultation
				+ ", diagnostic=" + diagnostic + "]";
	}

	public int getPatient_id() {
		return patient_id;
	}

	public void setPatient_id(int patient_id) {
		this.patient_id = patient_id;
	}
	

}
