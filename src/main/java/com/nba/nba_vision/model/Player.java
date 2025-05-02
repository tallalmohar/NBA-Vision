package com.nba.nba_vision.model;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

// Database model, linked ot the database table
@Entity
@Getter
@Setter
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String team;

    private String position;

    private Double pointsPerGame;
    private Double fieldGoalAttempts;
    private Double fieldGoalPercentage;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTeam() { return team; }
    public void setTeam(String team) { this.team = team; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public double getPointsPerGame() { return pointsPerGame; }
    public void setPointsPerGame(double pointsPerGame) { this.pointsPerGame = pointsPerGame; }

    public double getFieldGoalAttempts() { return fieldGoalAttempts; }
    public void setFieldGoalAttempts(double fieldGoalAttempts) { this.fieldGoalAttempts = fieldGoalAttempts; }

    public double getFieldGoalPercentage() { return fieldGoalPercentage; }
    public void setFieldGoalPercentage(double fieldGoalPercentage) { this.fieldGoalPercentage = fieldGoalPercentage; }


    private String minutes;
    private double points;
    private int assists;
    private int reboundsTotal;
    private int steals;
    private int blocks;
    private int turnovers;
    private int personalFouls;
    private int plusMinus;

    private double fgm;
    private double fga;
    private double fgp;

    private double ftm;
    private double fta;
    private double ftp;

    private double tpm;
    private double tpa;
    private double tpp;

}
