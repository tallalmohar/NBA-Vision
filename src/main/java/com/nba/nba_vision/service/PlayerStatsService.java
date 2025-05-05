package com.nba.nba_vision.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nba.nba_vision.model.PlayerStats;
import com.nba.nba_vision.repository.PlayerStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PlayerStatsService {

    @Autowired
    private PlayerStatsRepository playerStatsRepository;

    @Autowired
    private RestTemplate restTemplate;

    public void fetchAndSaveLatestStats(String playerId, String name) {
        String url = "https://basketball-head.p.rapidapi.com/players/" + playerId + "/stats/Totals?seasonType=Regular";

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", "f1cf141da2msh23c938fa8aaf25bp19b1ecjsn5fb591632aad");
        headers.set("X-RapidAPI-Host", "basketball-head.p.rapidapi.com");

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode bodyArray = root.get("body");

            if (bodyArray != null && bodyArray.isArray() && bodyArray.size() > 0) {
                JsonNode latestStats = null;
                int latestSeason = Integer.MIN_VALUE;

                for (JsonNode node : bodyArray) {
                    String seasonStr = node.get("season").asText();
                    if (!seasonStr.equalsIgnoreCase("Career")) {
                        try {
                            int season = Integer.parseInt(seasonStr.substring(0, 4));
                            if (season > latestSeason) {
                                latestSeason = season;
                                latestStats = node;
                            }
                        } catch (NumberFormatException ignored) {
                        }
                    }
                }

                if (latestStats != null) {
                    PlayerStats playerStats = new PlayerStats();
                    playerStats.setPlayerId(latestStats.get("playerId").asText());
                    playerStats.setTotalPoints(latestStats.get("totalPoints").asInt());
                    playerStats.setTotalRebounds(latestStats.get("totalRebounds").asInt());
                    playerStats.setTotalAssists(latestStats.get("totalAssists").asInt());
                    playerStats.setTotalSteals(latestStats.get("totalSteals").asInt());
                    playerStats.setTotalBlocks(latestStats.get("totalBlocks").asInt());
                    playerStats.setTotalTurnovers(latestStats.get("totalTurnovers").asInt());
                    playerStats.setAge(latestStats.get("age").asText());
                    playerStats.setPosition(latestStats.get("position").asText());
                    playerStats.setTeam(latestStats.get("team").asText());
                    playerStats.setName(name);

                    playerStatsRepository.save(playerStats);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
