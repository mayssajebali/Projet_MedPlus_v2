package com.medplus.services;

import java.util.List;
import java.util.Optional;

import com.medplus.entities.Discussion;

public interface IDiscussionService {
	public Discussion addDiscussion(Discussion discussion);
	public List<Discussion> getAllDiscussion();
	public Optional<Discussion> getDiscussionById(int id);
}
