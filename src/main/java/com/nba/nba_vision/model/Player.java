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

    /*
        private Double reboundsPerGame;
        private Double stealsPerGame;
        private Double blocksPerGame;
        private Integer plusMinus;
    */

}
