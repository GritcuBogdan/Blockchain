package org.example.Blockchain;

import java.util.ArrayList;
import java.util.List;

public class Blockchain {
    private List<Block> chain;

    public Blockchain() {
        chain = new ArrayList<>();
        createGenesisBlock();
    }


    public void createGenesisBlock() {
        PublicKey k1 = new PublicKey("cheia0");
        PublicKey k2 = new PublicKey("cheia1");
        Transaction genesisTransaction = new Transaction("00001", 69.9,k1 , k2);
        Transaction[] genesisArray = {genesisTransaction};

        Block genesisBlock = new Block(0,genesisArray);
        chain.add(genesisBlock);
    }

    public Block getLatestBlock(){
        return chain.get(chain.size()-1);
    }

    public void addBlock(Transaction[] transactions){
        Block previousBlock = getLatestBlock();
        Block newBlock = new Block(previousBlock.getBlockHash(),transactions);
        chain.add(newBlock);
    }


    //TO-DO: treb de implementat ceva mai eficient, da pana cand merge
    public boolean isValid(){
        for(int i =1 ; i< chain.size(); i++){
            Block currentBlock = chain.get(i);
            Block previousBlock = chain.get(i-1);

            if(currentBlock.getPreviousHash() != previousBlock.getBlockHash()){
                return false;
            }

            Object[] contents = {
                previousBlock.getBlockHash(),
                currentBlock.getTransactions()

            };

            if(currentBlock.calculateHash() != currentBlock.getBlockHash()){
                return false;
            }

        }
        return true;
    }

    public void displayChain() {
        for (Block block : chain) {
            System.out.println("Block Hash: " + block.getBlockHash());
            System.out.println("Previous Hash: " + block.getPreviousHash());
            System.out.println("Transactions: ");
            for (Transaction transaction : block.getTransactions()) {
                System.out.println(transaction);
            }
            System.out.println("--------------------");
        }
    }

}
