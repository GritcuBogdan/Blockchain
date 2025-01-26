//package org.example.Entity;
//
//import jakarta.persistence.*;
//
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "wallets")
//public class Wallet {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long walletId;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id",nullable = false)
//    private User user;
//
//    @Column(nullable = false)
//    private Double balance;
//
//    @Column(nullable = false)
//    private LocalDateTime created_at;
//
//    @Column(nullable = false)
//    private LocalDateTime updated_at;
//
//    public Wallet(Long wallet_id, User user, Double balance, LocalDateTime created_at, LocalDateTime updated_at) {
//        this.walletId = wallet_id;
//        this.user = user;
//        this.balance = balance;
//        this.created_at = created_at;
//        this.updated_at = updated_at;
//    }
//
//    public Wallet() {
//
//    }
//
//    public Long getWallet_id() {
//        return walletId;
//    }
//
//    public void setWallet_id(Long wallet_id) {
//        this.walletId = wallet_id;
//    }
//
//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }
//
//    public Double getBalance() {
//        return balance;
//    }
//
//    public void setBalance(Double balance) {
//        this.balance = balance;
//    }
//
//    public LocalDateTime getCreated_at() {
//        return created_at;
//    }
//
//    public void setCreated_at(LocalDateTime created_at) {
//        this.created_at = created_at;
//    }
//
//    public LocalDateTime getUpdated_at() {
//        return updated_at;
//    }
//
//    public void setUpdated_at(LocalDateTime updated_at) {
//        this.updated_at = updated_at;
//    }
//
//
//}
