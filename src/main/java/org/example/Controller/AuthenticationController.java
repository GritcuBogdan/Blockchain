package org.example.Controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.example.Service.AuthenticationService;
import org.example.auth.AuthenticationRequest;
import org.example.auth.AuthenticationResponse;
import org.example.auth.RegisterRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request){
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authentication")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request,
            HttpServletResponse response) {

        AuthenticationResponse authResponse = service.authenticate(request);

        String jwtToken = authResponse.getToken();

        // Setează token-ul JWT într-un cookie
        Cookie jwtCookie = new Cookie("jwt", jwtToken);
        jwtCookie.setHttpOnly(true); // Protejează cookie-ul împotriva accesului JavaScript
        jwtCookie.setSecure(true);  // Activează doar pentru conexiuni HTTPS
        jwtCookie.setPath("/");     // Disponibil pentru întreaga aplicație
        jwtCookie.setMaxAge(60 * 60); // Durată de 1 ora ( zi * ore * minute * secunde)

        // Adaugă cookie-ul la răspuns
        response.addCookie(jwtCookie);

        // Returnează întregul obiect AuthenticationResponse
        return ResponseEntity.ok(authResponse);
    }

}
