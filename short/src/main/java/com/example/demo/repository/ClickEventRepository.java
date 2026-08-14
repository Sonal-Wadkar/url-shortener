package com.example.demo.repository;

import com.example.demo.models.ClickEvent;
import com.example.demo.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ClickEventRepository
        extends JpaRepository<ClickEvent, Long> {

    List<ClickEvent> findByUrlMappingAndClickDateBetween(
            UrlMapping mapping,
            LocalDateTime start,
            LocalDateTime end
    );

    List<ClickEvent> findByUrlMappingInAndClickDateBetween(
            List<UrlMapping> urlMappings,
            LocalDateTime start,
            LocalDateTime end
    );
}