package com.nba.nba_vision.datasource;

import com.nba.nba_vision.model.Player;

import org.springframework.data.jpa.repository.JpaRepository;


//saves and fetch players with spring boot : D
public interface PlayerRepository extends JpaRepository<Player, Long> {

}
