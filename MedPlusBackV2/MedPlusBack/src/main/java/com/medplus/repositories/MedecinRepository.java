package com.medplus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medplus.entities.Medecin;

public interface MedecinRepository extends JpaRepository<Medecin,Integer>{

}
