package com.medplus.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medplus.entities.Ordonnance;

public interface OrdonnanceRepository extends JpaRepository<Ordonnance, Integer>{

}
