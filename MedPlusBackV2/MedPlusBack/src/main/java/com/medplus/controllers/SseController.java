package com.medplus.controllers;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medplus.entities.Discussion;
import com.medplus.repositories.DiscussionRepository;

import java.time.Duration;
import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class SseController {

    private final DiscussionRepository discussionsRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public SseController(DiscussionRepository discussionsRepository) {
        this.discussionsRepository = discussionsRepository;
    }

    @GetMapping(value = "/stream-sse", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> streamEvents() {
        return Flux.interval(Duration.ofSeconds(1))
                   .flatMap(sequence -> {
                       List<Discussion> allDiscussions = discussionsRepository.findAllDiscussions();
                       try {
                           String json = objectMapper.writeValueAsString(allDiscussions);
                           return Flux.just(json);
                       } catch (Exception e) {
                           return Flux.error(e);
                       }
                   });
    }
}