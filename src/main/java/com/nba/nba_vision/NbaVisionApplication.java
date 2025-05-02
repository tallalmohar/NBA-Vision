package com.nba.nba_vision;

import com.nba.nba_vision.service.PlayerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NbaVisionApplication {

	public static void main(String[] args) {
		SpringApplication.run(NbaVisionApplication.class, args);
	}
	@Bean
	CommandLineRunner run(PlayerService playerService) {
		return args -> {
			playerService.fetchAndSaveAllPlayersAndStats();
		};
	}
}
