package org.example.Blockchain;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {



    public static void main(String[] args) {
        Blockchain blockchain = new Blockchain();


        Transaction t1 = new Transaction("001", 50.0, "WalletA", "WalletB");
        Transaction t2 = new Transaction("002", 7.6, "WalletB", "WalletC");

        Transaction[] transactionsBlock1 = {t1, t2};
        blockchain.addBlock(transactionsBlock1);

        blockchain.displayChain();


        // Caroci el isi schimba hash-ul atunci cand se schimba priama locul din memorie ( i se atribuie valoare noua)
        // Adica numa cand t1= new Transaction... daca incerc prin t1.setAmount(123) se schimba amount-ul da t1 ca obiect
        // Ramane acelasi (in memorie).

        // TO-DO: de implementat o metoda prin care sa se recalculeze hash-ul la orice modificare,(da pana cand astai prototip)

        System.out.println("\nDupa modificare: ");
        t1 = new Transaction("001", 75.0, "WalletA", "WalletB");
        blockchain.getLatestBlock().getTransactions()[0] = t1;
        blockchain.getLatestBlock().updateHash();

        blockchain.displayChain();
    }
}
