package org.example.Service;


import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.bitcoinj.core.*;
import org.bitcoinj.kits.WalletAppKit;
import org.bitcoinj.params.TestNet3Params;
import org.bitcoinj.wallet.Wallet;
import org.example.Entity.User;
import org.example.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

@Service
public class BitcoinWalletService {
    private WalletAppKit walletAppKit;


    private final UserRepository userRepository;

    public BitcoinWalletService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void createUser(String username, String passwordHash, String email) {
        User user = new User();
        user.setUsername(username);
        user.setPasswordHash(passwordHash);
        user.setEmail(email);
        userRepository.save(user);
    }



    @PostConstruct
    public void init() {
        new Thread(() -> {
            try {
                NetworkParameters params = TestNet3Params.get();
                walletAppKit = new WalletAppKit(params, new java.io.File("wallet"), "wallet");

                walletAppKit.startAsync();
                walletAppKit.awaitRunning(30, TimeUnit.SECONDS);
                connectToPeers();

            } catch (TimeoutException e) {
                throw new RuntimeException("WalletAppKit did not start in time: " + e.getMessage(), e);
            }
        }).start();
    }

    @PreDestroy
    public void cleanup() {
        if (walletAppKit != null) {
            walletAppKit.stopAsync();
        }
    }
    public BitcoinWalletService() {
        throw new UnsupportedOperationException("Default constructor is not supported. Please use the constructor with UserRepository.");
    }

    private void connectToPeers() {

        PeerAddress peer1 = new PeerAddress(walletAppKit.params(), "18.162.45.10", 18333);
        PeerAddress peer2 = new PeerAddress(walletAppKit.params(), "13.211.216.231", 18333);


        walletAppKit.peerGroup().addAddress(peer1);
        walletAppKit.peerGroup().addAddress(peer2);

        walletAppKit.peerGroup().start();
    }


    public String generateNewAdress() {
        try {
            Wallet wallet = walletAppKit.wallet();
            Address address = wallet.freshReceiveAddress();
            return address.toString();
        } catch (Exception e) {

            return "Error generating new address: " + e.getMessage();
        }
    }

    public Coin getBalance(){
        Wallet wallet = walletAppKit.wallet();
       return wallet.getBalance();
    }

    public String sendTransaction(String toAddress,Coin amount) throws Exception{
        Wallet wallet = walletAppKit.wallet();
        Address to = Address.fromString(walletAppKit.params(),toAddress);
        Coin value = amount;

        Transaction transaction = wallet.createSend(to,value);
        walletAppKit.peerGroup().broadcastTransaction(transaction);

        return "Transaction Sent: "+ transaction.toString();
    }

    public void shutdown(){
        walletAppKit.stopAsync();
        walletAppKit.awaitTerminated();
    }
}
