package com.medplus.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.medplus.entities.Discussion;

public interface DiscussionRepository extends JpaRepository<Discussion,Integer>{
	@Query("SELECT d FROM Discussion d")
    List<Discussion> findAllDiscussions();
}
