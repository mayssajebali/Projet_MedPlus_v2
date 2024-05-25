package com.medplus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medplus.entities.Consultation;

public interface ConsulationRepository extends JpaRepository<Consultation, Integer>{

}
