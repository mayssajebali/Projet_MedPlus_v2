package com.medplus.entities;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class RendezVous {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_rendez_vous;
	
	//@Temporal(TemporalType.DATE.TIME)
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp  startDate;
	@Temporal(TemporalType.TIMESTAMP)
	private Timestamp  endDate;
	
	private int heure;
	private String text;
	

	@ManyToOne
	@JoinColumn(name="id_patient")
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name="id_calendrier")
	private Calendrier calendrier;
	


	public void setPatient(Patient patient) {
		this.patient = patient;
	}
	public Patient getPatient() {
		return patient;
	}
	public int getId_rendez_vous() {
		return id_rendez_vous;
	}
	public void setId_rendez_vous(int id_rendez_vous) {
		this.id_rendez_vous = id_rendez_vous;
	}
	public Timestamp getStartDate() {
        return startDate;
    }

  

	public void setStartDate(Timestamp startDate) {
		this.startDate = startDate;
	}
	public int getHeure() {
		return heure;
	}
	public void setHeure(int heure) {
		this.heure = heure;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	public RendezVous(Timestamp startDate, Timestamp endDate, int heure, String text,Patient patient) {
	    super();
	    this.startDate = startDate;
	    this.endDate = endDate;
	    this.heure = heure;
	    this.text = text;
	    this.patient=patient;
	}
	public RendezVous() {
		this.startDate = null;
		this.endDate = null;
		this.heure = 0;
		this.text = "";
		this.patient=null;
	}

	  public Timestamp getEndDate() {
	        return endDate;
	    }

	    public void setEndDate(Timestamp endDate) {
	        this.endDate = endDate;
	    }
	@Override
	public String toString() {
		return "RendezVous [id_rendez_vous=" + id_rendez_vous + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", heure=" + heure + ", text=" + text + "]";
	}
	
	
	
	
	
	

}
