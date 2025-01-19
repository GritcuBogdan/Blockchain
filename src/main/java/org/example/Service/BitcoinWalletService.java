package org.example.Service;


import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.bitcoinj.core.*;
import org.bitcoinj.kits.WalletAppKit;
import org.bitcoinj.params.TestNet3Params;
import org.bitcoinj.wallet.Wallet;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

@Service
public class BitcoinWalletService {
    private WalletAppKit walletAppKit;



    public BitcoinWalletService() {
        NetworkParameters params = TestNet3Params.get();
        walletAppKit = new WalletAppKit(params, new File("wallet"), "wallet");
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

    public Coin getBalance() {
        Wallet wallet = walletAppKit.wallet();
        return wallet.getBalance();
    }

    public String sendTransaction(String toAddress, Coin amount) throws Exception {
        Wallet wallet = walletAppKit.wallet();
        Address to = Address.fromString(walletAppKit.params(), toAddress);
        Coin value = amount;

        Transaction transaction = wallet.createSend(to, value);
        return "Transaction Created: " + transaction.toString();
    }

}
