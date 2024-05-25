package com.medplus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medplus.entities.Medicament;

public interface MedicamentRepository extends JpaRepository<Medicament, Integer>{

}
