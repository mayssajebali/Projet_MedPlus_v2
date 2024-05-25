package com.medplus.services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medplus.entities.Discussion;
import com.medplus.repositories.DiscussionRepository;

@Service
public class DiscussionServiceImpl implements IDiscussionService{

	@Autowired
	public DiscussionRepository discussionRepository;
	
	@Override
	public Discussion addDiscussion(Discussion discussion) {
		// TODO Auto-generated method stub
		 LocalDateTime now = LocalDateTime.now();
	     DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMMM yyyy hh:mm a");
	     String formattedDateTime = now.format(formatter);
	     discussion.setDate_discussion(formattedDateTime);
		return discussionRepository.save(discussion);
	}

	@Override
	public List<Discussion> getAllDiscussion() {
		// TODO Auto-generated method stub
		return discussionRepository.findAll();
	}
	@Override
	public Optional<Discussion> getDiscussionById(int id) {
		return discussionRepository.findById(id);
		}

}
