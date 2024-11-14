package org.example.Blockchain;


import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Transaction {
    private String transactionID;
    private double amount;

    //TO DO: Aici in loc de String treb de facut clasa aparte "PublicKey" tipa adresa de la wallet
    private String senderAdress;
    private String receiverAdress;

}
