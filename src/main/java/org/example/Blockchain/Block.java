package org.example.Blockchain;

import lombok.Getter;
import lombok.Setter;

import java.util.Arrays;

@Getter
@Setter
public class Block {
    private int previousHash;
    private Transaction[] transactions;
    private int blockHash;

    public Block(int previousHash, Transaction[] transactions) {
        this.previousHash = previousHash;
        this.transactions = transactions;

        Object[] contents = {Arrays.hashCode(transactions),previousHash};
        this.blockHash = Arrays.hashCode(contents);
    }


}
