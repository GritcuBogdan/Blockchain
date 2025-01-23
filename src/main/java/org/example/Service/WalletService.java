package org.example.Service;

import org.example.Entity.User;
import org.example.Entity.Wallet;
import org.example.Repository.UserRepository;
import org.example.Repository.WalletRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class WalletService {
    private WalletRepository walletRepository;

    @Autowired
    private UserRepository userRepository;

    public WalletService(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }



    public Wallet addWallet(Long userId, Double initialBalance) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User with ID " + userId + " not found"));


        if (user.getBalance() < initialBalance) {
            throw new RuntimeException("Insufficient user balance to initialize wallet");
        }


        user.setBalance(user.getBalance() - initialBalance);
        userRepository.save(user);


        Wallet wallet = new Wallet();
        wallet.setUser(user);
        wallet.setBalance(initialBalance);
        wallet.setCreated_at(LocalDateTime.now());
        wallet.setUpdated_at(LocalDateTime.now());

        return walletRepository.save(wallet);
    }

    public Optional<Wallet> getWalletById(Long id){
        return walletRepository.findById(id);
    }

    public Wallet updateWallet(Long id,Wallet updatedWallet) {
        return walletRepository.findById(id).map(wallet ->{
            wallet.setBalance(updatedWallet.getBalance());
            wallet.setUpdated_at(LocalDateTime.now());

            return walletRepository.save(wallet);
        })
                .orElseThrow(() -> new RuntimeException("Wallent with id " + id + " not found"));

    }

    public void deleteWallet(Long id) {
        walletRepository.deleteById(id);
    }

   public List<Wallet> getWalletsForUser(Long userId) {
        return walletRepository.findByUserId(userId);
   }
}
