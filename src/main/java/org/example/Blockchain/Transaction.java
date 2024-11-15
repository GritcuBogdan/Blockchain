package org.example.Blockchain;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class Transaction {
    private String transactionID;
    private double amount;

    //TO DO: Aici in loc de String treb de facut clasa aparte "PublicKey" tipa adresa de la wallet
    private String senderAdress;
    private String receiverAdress;


    public void setTransactionID(String transactionID) {
        this.transactionID = transactionID;

    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setSenderAdress(String senderAdress) {
        this.senderAdress = senderAdress;
    }

    public void setReceiverAdress(String receiverAdress) {
        this.receiverAdress = receiverAdress;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "transactionID='" + transactionID + '\'' +
                ", amount=" + amount +
                ", senderAdress='" + senderAdress + '\'' +
                ", receiverAdress='" + receiverAdress + '\'' +
                '}';
    }

}
