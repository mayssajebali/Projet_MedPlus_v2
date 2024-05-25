package com.medplus.entities;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Ordonnance {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    public int id;
    private Date date_creation;

	
    @ManyToOne
    @JoinColumn(name = "numero_dossier")
    private DossierMedical dossierMedical;
	
	
	@OneToMany
	@JoinColumn(name = "ordonnance")
	private List<Medicament> medicaments;
	

	public Ordonnance() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ordonnance(int id, String medecin_signature, Date dateCreation, DossierMedical dossier_medical,
			List<Medicament> medicaments) {
		super();
		this.id = id;
		this.date_creation = dateCreation;
		this.dossierMedical = dossier_medical;
		this.medicaments = medicaments;
	}





	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
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



	public List<Medicament> getMedicaments() {
		return medicaments;
	}




	public void setMedicaments(List<Medicament> medicaments) {
		this.medicaments = medicaments;
	}




	@Override
	public String toString() {
		return "Ordonnance [id=" + id + ",dateCreation=" + date_creation
				+ ", dossierMedical=" + dossierMedical + ", medicaments=" + medicaments + "]";
	}
	
	
}
