package com.medplus.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Calendrier {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id_calendrier;
	
	@Temporal(TemporalType.DATE)
	private LocalDate date_disponibile;

	@OneToMany(mappedBy="calendrier")
	private List<RendezVous> LesrendezVous=new ArrayList<>();
	
	@OneToOne(mappedBy="calendrier")
	private Secretaire secretaire;
	
	@OneToOne(mappedBy="calendrier")
	private Medecin medecin;
	
	public int getId_calendrier() {
		return id_calendrier;
	}

	public void setId_calendrier(int id_calendrier) {
		this.id_calendrier = id_calendrier;
	}

	public LocalDate getDate_disponibile() {
		return date_disponibile;
	}

	public void setDate_disponibile(LocalDate date_disponibile) {
		this.date_disponibile = date_disponibile;
	}

	public Calendrier(LocalDate date_disponibile) {
		this.date_disponibile = date_disponibile;
	}

	public Calendrier() {
		this.date_disponibile=null;
	}

	@Override
	public String toString() {
		return "Calendrier [id_calendrier=" + id_calendrier + ", date_disponibile=" + date_disponibile + "]";
	}
	
	
}

