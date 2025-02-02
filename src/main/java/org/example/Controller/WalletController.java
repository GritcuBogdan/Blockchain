package org.example.Controller;

import org.example.Entity.User;
import org.example.Entity.Wallet;
import org.example.Repository.UserRepository;
import org.example.Repository.WalletRepository;
import org.example.Service.WalletService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/wallets")
public class WalletController {
    private final WalletService walletService;
    private final WalletRepository walletRepository;
    private final UserRepository userRepository;



    public WalletController(WalletService walletService, WalletRepository walletRepository, UserRepository userRepository) {
        this.walletService = walletService;
        this.walletRepository = walletRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Wallet>> getWalletsForAuthentificatedUser() {
        List<Wallet> wallets = walletService.getWalletsForAuthenticatedUser();
        if (wallets.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(wallets);
    }

    @PostMapping("/addWallet")
    public ResponseEntity<Wallet> addWallet() {
        Wallet wallet = walletService.addWallet();
        return ResponseEntity.status(HttpStatus.CREATED).body(wallet);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWallet(@PathVariable Long id) {
        if (walletRepository.existsById(id)) {
            walletRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
