package com.medplus.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.medplus.entities.Discussion;

import com.medplus.services.IDiscussionService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class DiscussionController {
	@Autowired
	IDiscussionService iDiscussionService;
	
	@GetMapping("/discussions")
	public List<Discussion> allDiscussions(){
		return iDiscussionService.getAllDiscussion();
	}
	
	@PostMapping("/discussions")
	public Discussion createDisucussion(@RequestBody Discussion d ) {
		return iDiscussionService.addDiscussion(d);
		
	}
	
	
}
