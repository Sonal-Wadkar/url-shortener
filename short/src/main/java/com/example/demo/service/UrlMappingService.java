package com.example.demo.service;

import com.example.demo.dtos.ClickEventDTO;
import com.example.demo.dtos.UrlMappingDTO;
import com.example.demo.models.ClickEvent;
import com.example.demo.models.UrlMapping;
import com.example.demo.models.User;
import com.example.demo.repository.ClickEventRepository;
import com.example.demo.repository.UrlMappingRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UrlMappingService {

    private final UrlMappingRepository urlMappingRepository;
    private final ClickEventRepository clickEventRepository;


    // ============================================================
    // CREATE SHORT URL
    // ============================================================

    public UrlMappingDTO createShortUrl(String originalUrl, User user) {

        String shortUrl = generateShortUrl();

        UrlMapping urlMapping = new UrlMapping();

        urlMapping.setOriginalUrl(originalUrl);
        urlMapping.setUser(user);
        urlMapping.setCreateDate(LocalDateTime.now());
        urlMapping.setShortUrl(shortUrl);

        UrlMapping savedUrlMapping =
                urlMappingRepository.save(urlMapping);

        return convertToDto(savedUrlMapping);
    }


    // ============================================================
    // CONVERT ENTITY TO DTO
    // ============================================================

    private UrlMappingDTO convertToDto(UrlMapping urlMapping) {

        UrlMappingDTO urlMappingDTO = new UrlMappingDTO();

        urlMappingDTO.setId(urlMapping.getId());
        urlMappingDTO.setOriginalUrl(urlMapping.getOriginalUrl());
        urlMappingDTO.setShortUrl(urlMapping.getShortUrl());
        urlMappingDTO.setClickCount(urlMapping.getClickCount());
        urlMappingDTO.setCreatedDate(urlMapping.getCreateDate());

        if (urlMapping.getUser() != null) {

            urlMappingDTO.setUsername(
                    urlMapping.getUser().getUsername()
            );
        }

        return urlMappingDTO;
    }


    // ============================================================
    // GENERATE RANDOM SHORT URL
    // ============================================================

    private String generateShortUrl() {

        String characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        Random random = new Random();

        StringBuilder shortUrl = new StringBuilder(8);

        for (int i = 0; i < 8; i++) {

            shortUrl.append(
                    characters.charAt(
                            random.nextInt(characters.length())
                    )
            );
        }

        return shortUrl.toString();
    }


    // ============================================================
    // GET ALL URLS CREATED BY USER
    // ============================================================

    public List<UrlMappingDTO> getUrlsByUser(User user) {

        return urlMappingRepository
                .findByUser(user)
                .stream()
                .map(this::convertToDto)
                .toList();
    }


    // ============================================================
    // GET CLICK EVENTS FOR A SHORT URL BETWEEN TWO DATES
    // ============================================================

    public List<ClickEventDTO> getClickEventsByDate(
            String shortUrl,
            LocalDateTime start,
            LocalDateTime end) {

        UrlMapping urlMapping =
                urlMappingRepository.findByShortUrl(shortUrl);

        // Short URL doesn't exist
        if (urlMapping == null) {
            return List.of();
        }

        List<ClickEvent> clickEvents =
                clickEventRepository
                        .findByUrlMappingAndClickDateBetween(
                                urlMapping,
                                start,
                                end
                        );

        return clickEvents.stream()
                .collect(Collectors.groupingBy(
                        click -> click.getClickDate().toLocalDate(),
                        Collectors.counting()
                ))
                .entrySet()
                .stream()
                .map(entry -> {

                    ClickEventDTO clickEventDTO =
                            new ClickEventDTO();

                    clickEventDTO.setClickDate(entry.getKey());
                    clickEventDTO.setCount(entry.getValue());

                    return clickEventDTO;
                })
                .toList();
    }


    // ============================================================
    // GET TOTAL CLICKS BY USER AND DATE
    // ============================================================

    public Map<LocalDate, Long> getTotalClicksBtUserAndDate(
            User user,
            LocalDate start,
            LocalDate end) {

        // Get all URLs belonging to this user
        List<UrlMapping> urlMappings =
                urlMappingRepository.findByUser(user);

        // User has no URLs
        if (urlMappings.isEmpty()) {
            return Map.of();
        }

        // Get click events for all URLs belonging to this user
        List<ClickEvent> clickEvents =
                clickEventRepository
                        .findByUrlMappingInAndClickDateBetween(
                                urlMappings,
                                start.atStartOfDay(),
                                end.plusDays(1).atStartOfDay()
                        );

        // Group clicks by date
        return clickEvents.stream()
                .collect(Collectors.groupingBy(
                        click -> click.getClickDate().toLocalDate(),
                        Collectors.counting()
                ));
    }


    // ============================================================
    // GET ORIGINAL URL FROM SHORT URL
    // ============================================================

    public UrlMapping getOriginalUrl(String shortUrl) {

        UrlMapping urlMapping =
                urlMappingRepository.findByShortUrl(shortUrl);

        if (urlMapping != null) {

            // Increment click count
            urlMapping.setClickCount(
                    urlMapping.getClickCount() + 1
            );

            // Save updated click count
            urlMappingRepository.save(urlMapping);

            // Record ClickEvent
            ClickEvent clickEvent = new ClickEvent();

            clickEvent.setClickDate(LocalDateTime.now());
            clickEvent.setUrlMapping(urlMapping);

            clickEventRepository.save(clickEvent);
        }

        return urlMapping;
    }
}