package org.example.Blockchain;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {


    ArrayList<Block> blockchain = new ArrayList<>();
    public static void main(String[] args) {
        Transaction t1 = new Transaction("001",75.6,"Walletu lu Bonca","Walletu lu Cristi");
        Transaction[] genesisTransactions = {t1};

        //TO-DO: Treb de facut clasa aparte "Blockchain" unde de adaugat block-ul genesis (tipa blockul 0)
        Block genesisBlock = new Block(0,genesisTransactions);

        System.out.println(genesisBlock.getBlockHash());
    }
}
