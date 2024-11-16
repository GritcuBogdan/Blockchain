package org.example.Blockchain;

import java.util.Arrays;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Block {
    private String previousHash;
    private Transaction[] transactions;
    private String blockHash;

    public Block(String previousHash, Transaction[] transactions) {
        this.previousHash = previousHash;
        this.transactions = transactions;
        this.blockHash = calculateHash();
    }


    public String calculateHash() {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Concatenate the transactions and previousHash
            StringBuilder data = new StringBuilder(previousHash);
            for (Transaction transaction : transactions) {
                data.append(transaction.hashCode());
            }

            byte[] hash = digest.digest(data.toString().getBytes());
            StringBuilder hexString = new StringBuilder();
            for (byte b : hash) {
                hexString.append(String.format("%02x", b));
            }

            return hexString.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Error computing hash", e);
        }
    }

    // Getters
    public String getBlockHash() {
        return blockHash;
    }

    public String getPreviousHash() {
        return previousHash;
    }

    public Transaction[] getTransactions() {
        return transactions;
    }


    public void updateHash() {
        this.blockHash = calculateHash();
    }
}
