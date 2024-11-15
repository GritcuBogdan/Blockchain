package org.example.Blockchain;

import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

public class Block {
    private int previousHash;
    private Transaction[] transactions;
    private int blockHash;

    public Block(int previousHash, Transaction[] transactions) {
        this.previousHash = previousHash;
        this.transactions = transactions;
        this.blockHash = calculateHash();
    }

    public int calculateHash() {
        int transactionHash = Arrays.stream(transactions)
                .mapToInt(Transaction::hashCode)
                .sum();
        Object[] contents = {transactionHash, previousHash};
        return Arrays.hashCode(contents);
    }

    public int getBlockHash() {
        return blockHash;
    }

    public int getPreviousHash() {
        return previousHash;
    }

    public Transaction[] getTransactions() {
        return transactions;
    }

    public void updateHash() {
        this.blockHash = calculateHash();
    }
}