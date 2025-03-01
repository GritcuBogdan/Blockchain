package org.example.UserManagementService.Service;

import lombok.RequiredArgsConstructor;
import org.example.UserManagementService.Repository.UserRepository;
import org.example.UserManagementService.Entity.Role;
import org.example.UserManagementService.Entity.User;
import org.example.UserManagementService.Entity.CurrencyType;
import org.example.UserManagementService.Entity.AuthenticationRequest;
import org.example.UserManagementService.Entity.AuthenticationResponse;
import org.example.UserManagementService.Entity.RegisterRequest;
import org.example.UserManagementService.Config.JwtService;
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
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    private boolean isValidCurrency(CurrencyType currency) {
        for (CurrencyType type : CurrencyType.values()) {
            if (type == currency) {
                return true;
            }
        }
        return false;
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
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}