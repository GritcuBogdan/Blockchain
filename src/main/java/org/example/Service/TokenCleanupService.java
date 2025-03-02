package org.example.Service;

import lombok.RequiredArgsConstructor;
import org.example.Repository.TokenRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenCleanupService {

    private final TokenRepository tokenRepository;

    @Scheduled(cron = "0 0 3 * * ?") // ora 3:00 am in fiecare zi
    public void deleteExpiredTokens(){
        int deletedTokens = tokenRepository.deleteExpiredTokens();
        System.out.println("Cron job executat: " + deletedTokens + " token-uri expirate șterse.");
    }
}
