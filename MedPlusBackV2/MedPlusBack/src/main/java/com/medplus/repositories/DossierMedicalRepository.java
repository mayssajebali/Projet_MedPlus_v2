package com.medplus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medplus.entities.DossierMedical;

public interface DossierMedicalRepository extends JpaRepository<DossierMedical, Integer>{

}
