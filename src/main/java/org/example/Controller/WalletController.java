//package org.example.Controller;
//
//import org.example.Entity.User;
//import org.example.Entity.Wallet;
//import org.example.Repository.UserRepository;
//import org.example.Repository.WalletRepository;
//import org.example.Service.WalletService;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import jakarta.validation.Valid;
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/api/wallets")
//public class WalletController {
//    private final WalletService walletService;
//    private final WalletRepository walletRepository;
//    private final UserRepository userRepository;
//
//
//
//    public WalletController(WalletService walletService, WalletRepository walletRepository, UserRepository userRepository) {
//        this.walletService = walletService;
//        this.walletRepository = walletRepository;
//        this.userRepository = userRepository;
//    }
//
//    @GetMapping("/users/{userId}")
//    public ResponseEntity<List<Wallet>> getWalletsForUser(@PathVariable Long userId) {
//        List<Wallet> wallets = walletService.getWalletsForUser(userId);
//        if (wallets.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//        }
//        return ResponseEntity.ok(wallets);
//    }
//
//    @PostMapping
//    public ResponseEntity<Wallet> addWallet(
//            @RequestParam Long userId,
//            @RequestParam Double initialBalance) {
//        Wallet wallet = walletService.addWallet(userId, initialBalance);
//        return ResponseEntity.status(HttpStatus.CREATED).body(wallet);
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Wallet> updateWallet(@PathVariable Long id, @Valid @RequestBody Wallet updatedWallet) {
//        Optional<Wallet> wallet = walletRepository.findById(id);
//        if (wallet.isPresent()) {
//            Wallet existingWallet = wallet.get();
//            existingWallet.setBalance(updatedWallet.getBalance());
//            existingWallet.setUpdated_at(LocalDateTime.now());
//            walletRepository.save(existingWallet);
//            return ResponseEntity.ok(existingWallet);
//        }
//        return ResponseEntity.notFound().build();
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteWallet(@PathVariable Long id) {
//        if (walletRepository.existsById(id)) {
//            walletRepository.deleteById(id);
//            return ResponseEntity.noContent().build();
//        }
//        return ResponseEntity.notFound().build();
//    }
//}
