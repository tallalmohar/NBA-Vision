package com.nba.nba_vision.datasource;

import com.nba.nba_vision.model.Player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//saves and fetch players with spring boot : D
@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}
