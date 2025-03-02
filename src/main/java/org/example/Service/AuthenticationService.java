package org.example.Service;

import lombok.RequiredArgsConstructor;
import org.example.Entity.*;
import org.example.Repository.TokenRepository;
import org.example.Repository.UserRepository;
import org.example.auth.AuthenticationRequest;
import org.example.auth.AuthenticationResponse;
import org.example.auth.RegisterRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        if (request.getBaseCurrency() == null || !isValidCurrency(request.getBaseCurrency())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid base currency");
        }

        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .Total_Balance(BigDecimal.ZERO)
                .baseCurrency(request.getBaseCurrency())
                .build();
        var savedUser = repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        saveUserToken(savedUser, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        revokeAllUserToken(user);
        saveUserToken(user, jwtToken);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private void revokeAllUserToken(User user){
        var validUserTokens = tokenRepository.findAllValidTokensByUser(user.getId());
        if(validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    private boolean isValidCurrency(CurrencyType currency) {
        for (CurrencyType type : CurrencyType.values()) {
            if (type == currency) {
                return true;
            }
        }
        return false;
    }

    private void saveUserToken(User user, String jwtToken){
        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenTipe(TokenTipe.BEARER)
                .revoked(false)
                .expired(false)
                .build();
        tokenRepository.save(token);
    }
}