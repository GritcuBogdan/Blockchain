package org.example.WalletService.Repository;

import org.example.WalletService.Entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WalletRepository extends JpaRepository<Wallet, Long> {
    @Query("SELECT w FROM Wallet w WHERE w.walletId = :walletId")
    Optional<Wallet> getWalletByWalletId(@Param("walletId") Long walletId);

    @Query("SELECT w FROM Wallet w WHERE w.user.id = :userId")
    List<Wallet> findByUserId(@Param("userId") Integer userId);
}
