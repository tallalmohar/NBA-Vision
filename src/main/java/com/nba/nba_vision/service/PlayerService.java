package com.nba.nba_vision.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.nba.nba_vision.datasource.PlayerRepository;
import com.nba.nba_vision.model.Player;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpHeaders;

import java.util.ArrayList;
import java.util.List;

// calls API
// FETCH players, FETCH stats, save everything
@Service
public class PlayerService {
    private final RestTemplate restTemplate;
    private final PlayerRepository playerRepository;

    private static final String API_KEY = "f1cf141da2msh23c938fa8aaf25bp19b1ecjsn5fb591632aad";
    private static final String API_HOST = "api-nba-v1.p.rapidapi.com";

    public PlayerService(RestTemplate restTemplate, PlayerRepository playerRepository) {
        this.restTemplate = restTemplate;
        this.playerRepository = playerRepository;
    }

    //Combines everything: fetch teams -> loop -> fetch players -> sleep -> save
    public void fetchAndSavePlayers() throws InterruptedException {
        System.out.println("🔵 Fetching NBA teams...");
        List<Integer> teamIds = fetchAllTeamIds();

        if (teamIds.isEmpty()) {
            System.out.println("⚠️ No team IDs found. Exiting.");
            return;
        }

        List<Player> allPlayers = new ArrayList<>();

        for (Integer teamId : teamIds) {
            System.out.println("🔵 Fetching players for team ID: " + teamId);
            List<Player> teamPlayers = fetchPlayersForTeam(teamId);

            allPlayers.addAll(teamPlayers);

            // Respect RapidAPI 10 requests per minute = 6 seconds sleep
            Thread.sleep(6000);
        }

        playerRepository.saveAll(allPlayers);
        System.out.println("🎯 All players saved to database! Total players: " + allPlayers.size());
    }
    //calls teams API once and greabs all NBA TEAM IDs -> 1-...
    private List<Integer> fetchAllTeamIds() {
        String teamsUrl = "https://api-nba-v1.p.rapidapi.com/teams";

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", API_KEY);
        headers.set("X-RapidAPI-Host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<JsonNode> response = restTemplate.exchange(teamsUrl, HttpMethod.GET, entity, JsonNode.class);

        JsonNode teamsData = response.getBody().get("response");

        List<Integer> teamIds = new ArrayList<>();

        for (JsonNode teamNode : teamsData) {
            try {
                if (teamNode.get("nbaFranchise").asBoolean()) { // Only NBA teams (filter out G League, etc.)
                    teamIds.add(teamNode.get("id").asInt());
                }
            } catch (Exception e) {
                System.out.println("⚠️ Skipping invalid team: " + e.getMessage());
            }
        }

        return teamIds;
    }
    // For a given team ID, fetches all players
    private List<Player> fetchPlayersForTeam(Integer teamId) {
        String playersUrl = "https://api-nba-v1.p.rapidapi.com/players?team=" + teamId + "&season=2023";

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", API_KEY);
        headers.set("X-RapidAPI-Host", API_HOST);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<JsonNode> response = restTemplate.exchange(playersUrl, HttpMethod.GET, entity, JsonNode.class);
            JsonNode playersData = response.getBody().get("response");

            System.out.println("🔍 Team ID: " + teamId + " - Response size: " + (playersData != null ? playersData.size() : "null"));

            List<Player> players = new ArrayList<>();

            if (playersData == null || playersData.size() == 0) {
                System.out.println("⚠️ No players found for team ID: " + teamId);
                return players;
            }

            for (JsonNode playerNode : playersData) {
                try {
                    Player player = new Player();

                    String firstname = playerNode.hasNonNull("firstname") ? playerNode.get("firstname").asText() : "";
                    String lastname = playerNode.hasNonNull("lastname") ? playerNode.get("lastname").asText() : "";
                    player.setName(firstname + " " + lastname);

                    if (playerNode.hasNonNull("team") && playerNode.get("team").hasNonNull("name")) {
                        player.setTeam(playerNode.get("team").get("name").asText());
                    } else {
                        player.setTeam("Unknown Team");
                    }

                    player.setPosition(playerNode.hasNonNull("pos") ? playerNode.get("pos").asText() : "N/A");

                    player.setPointsPerGame(0.0);
                    player.setFieldGoalAttempts(0.0);
                    player.setFieldGoalPercentage(0.0);

                    players.add(player);
                } catch (Exception e) {
                    System.out.println("⚠️ Error parsing player: " + e.getMessage());
                }
            }

            return players;

        } catch (Exception e) {
            System.out.println("⚠️ Error fetching players for team ID " + teamId + ": " + e.getMessage());
            return new ArrayList<>();
        }
    }
}

