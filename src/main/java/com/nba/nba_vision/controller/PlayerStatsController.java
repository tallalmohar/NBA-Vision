package com.nba.nba_vision.controller;

import com.nba.nba_vision.service.PlayerStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/player-stats")
public class PlayerStatsController {

    @Autowired
    private PlayerStatsService playerStatsService;

    @PostMapping("/fetch")
    public String fetchAndSavePlayerStats(@RequestParam String playerId, @RequestParam String name) {
        playerStatsService.fetchAndSaveLatestStats(playerId, name);
        return "Stats fetched and saved for: " + name;
    }
}
