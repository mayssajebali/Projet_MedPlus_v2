package com.medplus.services;
import java.sql.Date;
import java.util.List;

import com.medplus.entities.Certificat;
public interface ICertificatService {
	  public List<Certificat> getAllCertificats();
	    public List<Certificat> getAllCertificatsbyPatient(int id);
	    public Certificat addCertificat(Certificat c, int id_dossier);
	    public List<Certificat> getCertificatsByDate(Date date,int id);
	    public void deleteCertificat(int id);
}
