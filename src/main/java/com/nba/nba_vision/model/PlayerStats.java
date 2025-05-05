package com.nba.nba_vision.model;

import jakarta.persistence.*;

@Entity
@Table(name = "player_stats")
public class PlayerStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String playerId;
    private String name;
    private String age;
    private String position;
    private String team;

    private int totalPoints;
    private int totalRebounds;
    private int totalAssists;
    private int totalSteals;
    private int totalBlocks;
    private int totalTurnovers;

    // Getters and Setters
    public Long getId() { return id; }

    public void setId(Long id) { this.id = id; }

    public String getPlayerId() { return playerId; }

    public void setPlayerId(String playerId) { this.playerId = playerId; }

    public String getName() { return name; }

    public void setName(String name) { this.name = name; }

    public String getAge() { return age; }

    public void setAge(String age) { this.age = age; }

    public String getPosition() { return position; }

    public void setPosition(String position) { this.position = position; }

    public String getTeam() { return team; }

    public void setTeam(String team) { this.team = team; }

    public int getTotalPoints() { return totalPoints; }

    public void setTotalPoints(int totalPoints) { this.totalPoints = totalPoints; }

    public int getTotalRebounds() { return totalRebounds; }

    public void setTotalRebounds(int totalRebounds) { this.totalRebounds = totalRebounds; }

    public int getTotalAssists() { return totalAssists; }

    public void setTotalAssists(int totalAssists) { this.totalAssists = totalAssists; }

    public int getTotalSteals() { return totalSteals; }

    public void setTotalSteals(int totalSteals) { this.totalSteals = totalSteals; }

    public int getTotalBlocks() { return totalBlocks; }

    public void setTotalBlocks(int totalBlocks) { this.totalBlocks = totalBlocks; }

    public int getTotalTurnovers() { return totalTurnovers; }

    public void setTotalTurnovers(int totalTurnovers) { this.totalTurnovers = totalTurnovers; }


}
