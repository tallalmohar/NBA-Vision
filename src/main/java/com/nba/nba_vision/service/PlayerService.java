package com.nba.nba_vision.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.nba.nba_vision.datasource.PlayerRepository;
import com.nba.nba_vision.model.Player;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpHeaders;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    public void fetchAndSaveAllPlayersAndStats() {
        for (int teamId = 1; teamId <= 30; teamId++) {
            try {
                System.out.println("🔁 Fetching players for team ID: " + teamId);
                List<Player> players = fetchPlayersByTeamId(teamId);
                for (Player player : players) {
                    fetchAndAttachStats(player);
                    playerRepository.save(player);
                    Thread.sleep(1500); // avoid hitting API rate limits
                }
            } catch (Exception e) {
                System.out.println("⚠️ Error fetching players for team " + teamId + ": " + e.getMessage());
            }
        }
        System.out.println("🎯 Done saving all players with stats!");
    }

    private List<Player> fetchPlayersByTeamId(int teamId) {
        List<Player> players = new ArrayList<>();
        String url = "https://api-nba-v1.p.rapidapi.com/players?team=" + teamId + "&season=2023";

        HttpHeaders headers = getHeaders();
        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<JsonNode> response = restTemplate.exchange(url, HttpMethod.GET, entity, JsonNode.class);
            JsonNode data = response.getBody().get("response");

            for (JsonNode node : data) {
                try {
                    Player player = new Player();
                    JsonNode idNode = node.get("id");
                    JsonNode firstNode = node.get("firstname");
                    JsonNode lastNode = node.get("lastname");
                    JsonNode teamNode = node.get("team");

                    if (idNode == null || firstNode == null || lastNode == null || teamNode == null || teamNode.get("name") == null) {
                        throw new IllegalStateException("Missing player data");
                    }

                    player.setId(idNode.asLong());
                    player.setName(firstNode.asText() + " " + lastNode.asText());
                    player.setTeam(teamNode.get("name").asText());

                    if (node.has("leagues") && node.get("leagues").has("standard")) {
                        JsonNode std = node.get("leagues").get("standard");
                        player.setPosition(std.has("pos") ? std.get("pos").asText() : "N/A");
                    } else {
                        player.setPosition("N/A");
                    }

                    players.add(player);
                } catch (Exception e) {
                    System.out.println("⚠️ Skipping player: " + e.getMessage());
                }
            }
        } catch (Exception e) {
            System.out.println("❌ Error fetching players: " + e.getMessage());
        }

        return players;
    }

    private void fetchAndAttachStats(Player player) {
        String url = "https://api-nba-v1.p.rapidapi.com/players/statistics?id=" + player.getId() + "&season=2023";
        HttpHeaders headers = getHeaders();
        HttpEntity<String> entity = new HttpEntity<>(headers);

        try {
            ResponseEntity<JsonNode> response = restTemplate.exchange(url, HttpMethod.GET, entity, JsonNode.class);
            JsonNode statsArray = response.getBody().get("response");

            if (statsArray != null && statsArray.isArray() && statsArray.size() > 0) {
                JsonNode stats = statsArray.get(0); // latest game

                player.setMinutes(stats.path("min").asText("0:00"));
                player.setPoints(stats.path("points").asDouble(0));
                player.setAssists(stats.path("assists").asInt(0));
                player.setReboundsTotal(stats.path("totReb").asInt(0));
                player.setSteals(stats.path("steals").asInt(0));
                player.setBlocks(stats.path("blocks").asInt(0));
                player.setTurnovers(stats.path("turnovers").asInt(0));
                player.setPersonalFouls(stats.path("pFouls").asInt(0));
                player.setPlusMinus(parseIntSafe(stats.path("plusMinus")));

                player.setFgm(stats.path("fgm").asDouble(0));
                player.setFga(stats.path("fga").asDouble(0));
                player.setFgp(parseDoubleSafe(stats.path("fgp")));

                player.setFtm(stats.path("ftm").asDouble(0));
                player.setFta(stats.path("fta").asDouble(0));
                player.setFtp(parseDoubleSafe(stats.path("ftp")));

                player.setTpm(stats.path("tpm").asDouble(0));
                player.setTpa(stats.path("tpa").asDouble(0));
                player.setTpp(parseDoubleSafe(stats.path("tpp")));
            }

        } catch (Exception e) {
            System.out.println("⚠️ Could not fetch stats for player " + player.getId() + ": " + e.getMessage());
        }
    }

    private HttpHeaders getHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("X-RapidAPI-Key", API_KEY);
        headers.set("X-RapidAPI-Host", API_HOST);
        return headers;
    }

    private double parseDoubleSafe(JsonNode node) {
        try {
            return node != null ? Double.parseDouble(node.asText()) : 0.0;
        } catch (Exception e) {
            return 0.0;
        }
    }

    private int parseIntSafe(JsonNode node) {
        try {
            return node != null ? Integer.parseInt(node.asText()) : 0;
        } catch (Exception e) {
            return 0;
        }
    }
}

