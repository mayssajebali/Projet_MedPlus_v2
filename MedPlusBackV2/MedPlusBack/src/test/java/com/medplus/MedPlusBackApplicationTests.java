package com.medplus;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.medplus.entities.Discussion;
import com.medplus.entities.Patient;
import com.medplus.services.IDiscussionService;
import com.medplus.services.IPatientService;

@SpringBootTest
class MedPlusBackApplicationTests {

	@Autowired
	IPatientService iPatientService ;
	
	@Autowired
	IDiscussionService iDiscussionService ;
	
	/*@Test
	void findPatientByIdNotFoundTest() {
		Optional<Patient> patient=iPatientService.getPatientById(0);
		assertEquals(false,patient.isPresent());
		}
	@Test
	void findPatientByIdFoundTest() {
		Optional<Patient> patient=iPatientService.getPatientById(1);
		assertEquals(true,patient.isPresent());
		assertEquals(1, patient.get().getId_patient());
	}
	@Test
	void findDiscussionByIdFound() {
		Optional<Discussion> discussion=iDiscussionService.getDiscussionById(0);
		assertEquals(true,discussion.isPresent());
		assertEquals(0, discussion.get().getId_discussion());
	}
	
	@Test
	void finDiscussionByIdNotFound() {
		Optional<Discussion> discussion=iDiscussionService.getDiscussionById(1);
		assertEquals(false,discussion.isPresent());
	}
	*/
	
	
	
}
