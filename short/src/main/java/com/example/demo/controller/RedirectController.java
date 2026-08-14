package com.example.demo.controller;

import com.example.demo.models.UrlMapping;
import com.example.demo.service.UrlMappingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RedirectController {

    private final UrlMappingService urlMappingService;

    @GetMapping("/{shortUrl}")
    public ResponseEntity<Void> redirect(
            @PathVariable String shortUrl) {

        // Find the short URL in the database
        UrlMapping urlMapping =
                urlMappingService.getOriginalUrl(shortUrl);

        // If short URL exists, redirect to the original URL
        if (urlMapping != null) {

            HttpHeaders headers = new HttpHeaders();

            headers.add(
                    "Location",
                    urlMapping.getOriginalUrl()
            );

            return ResponseEntity
                    .status(302)
                    .headers(headers)
                    .build();
        }

        // If short URL does not exist, return 404
        return ResponseEntity.notFound().build();
    }
}