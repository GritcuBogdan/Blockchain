//package org.example.Service;
//
//import org.example.Entity.Transaction;
//import org.example.Entity.Wallet;
//import org.example.Repository.TransactionRepository;
//import org.example.Repository.WalletRepository;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class TransactionService {
//
//    private final TransactionRepository transactionRepository;
//    private final WalletRepository walletRepository;
//
//    public TransactionService(TransactionRepository transactionRepository, WalletRepository walletRepository) {
//        this.transactionRepository = transactionRepository;
//        this.walletRepository = walletRepository;
//    }
//
//
//    public Transaction transfer(Long senderWalletId, Long receiverWalletId, Double amount) {
//        if(receiverWalletId == senderWalletId) {
//            throw new IllegalArgumentException("Receiver Wallet Id is the same as sender Wallet Id");
//        }
//
//        Optional<Wallet> senderWalletOpt = walletRepository.findById(senderWalletId);
//        Optional<Wallet> receiverWalletOpt = walletRepository.findById(receiverWalletId);
//
//        if (senderWalletOpt.isEmpty() || receiverWalletOpt.isEmpty()) {
//            throw new IllegalArgumentException("One or both wallet IDs are invalid.");
//        }
//
//        Wallet senderWallet = senderWalletOpt.get();
//        Wallet receiverWallet = receiverWalletOpt.get();
//
//        if (senderWallet.getBalance() < amount) {
//            throw new IllegalArgumentException("Sender wallet has insufficient balance.");
//        }
//
//
//        senderWallet.setBalance(senderWallet.getBalance() - amount);
//        receiverWallet.setBalance(receiverWallet.getBalance() + amount);
//
//        walletRepository.save(senderWallet);
//        walletRepository.save(receiverWallet);
//
//
//        Transaction transaction = new Transaction();
//        transaction.setSenderWalletId(senderWalletId);
//        transaction.setReceiverWalletId(receiverWalletId);
//        transaction.setAmount(amount);
//        transaction.setTimestamp(LocalDateTime.now());
//        transaction.setStatus("SUCCESS");
//        transaction.setTransactionHash(generateTransactionHash(senderWalletId, receiverWalletId, amount, transaction.getTimestamp(), transaction.getTransactionType()));
//        transaction.setTransactionType("TRANSFER");
//        return transactionRepository.save(transaction);
//    }
//
//    public Transaction deposit(Long walletId, Double amount) {
//        Optional<Wallet> walletOpt = walletRepository.findById(walletId);
//
//        if (walletOpt.isEmpty()) {
//            throw new IllegalArgumentException("Wallet ID is invalid.");
//        }
//
//        Wallet wallet = walletOpt.get();
//
//        if (amount <= 0) {
//            throw new IllegalArgumentException("Amount must be greater than 0.");
//        }
//
//
//        wallet.setBalance(wallet.getBalance() + amount);
//        walletRepository.save(wallet);
//
//
//        Transaction transaction = new Transaction();
//        transaction.setSenderWalletId(null);
//        transaction.setReceiverWalletId(walletId);
//        transaction.setAmount(amount);
//        transaction.setTimestamp(LocalDateTime.now());
//        transaction.setStatus("SUCCESS");
//        transaction.setTransactionType("DEPOSIT");
//        transaction.setTransactionHash(generateTransactionHash(null, walletId, amount, transaction.getTimestamp(),transaction.getTransactionType()));
//
//        return transactionRepository.save(transaction);
//    }
//
//    public Transaction withdraw(Long walletId, Double amount) {
//        Optional<Wallet> walletOpt = walletRepository.findById(walletId);
//
//        if (walletOpt.isEmpty()) {
//            throw new IllegalArgumentException("Wallet ID is invalid.");
//        }
//
//        Wallet wallet = walletOpt.get();
//
//        if (amount <= 0) {
//            throw new IllegalArgumentException("Amount must be greater than 0.");
//        }
//
//        if (wallet.getBalance() < amount) {
//            throw new IllegalArgumentException("Wallet has insufficient balance.");
//        }
//
//        wallet.setBalance(wallet.getBalance() - amount);
//        walletRepository.save(wallet);
//
//
//        Transaction transaction = new Transaction();
//        transaction.setSenderWalletId(walletId);
//        transaction.setReceiverWalletId(null);
//        transaction.setAmount(amount);
//        transaction.setTimestamp(LocalDateTime.now());
//        transaction.setStatus("SUCCESS");
//        transaction.setTransactionType("WITHDRAW");
//        transaction.setTransactionHash(generateTransactionHash(walletId, null, amount, transaction.getTimestamp(), transaction.getTransactionType()));
//
//        return transactionRepository.save(transaction);
//    }
//
//
//
//    private String generateTransactionHash(Long senderWalletId, Long receiverWalletId, Double amount, LocalDateTime timestamp, String transactionType) {
//        String data;
//
//        if ("TRANSFER".equals(transactionType)) {
//
//            if (senderWalletId == null || receiverWalletId == null) {
//                throw new IllegalArgumentException("Both senderWalletId and receiverWalletId must be provided for a TRANSFER");
//            }
//            data = senderWalletId + receiverWalletId + amount + timestamp.toString();
//        } else if ("DEPOSIT".equals(transactionType)) {
//
//            if (receiverWalletId == null) {
//                throw new IllegalArgumentException("receiverWalletId must be provided for DEPOSIT");
//            }
//            data = receiverWalletId + amount + timestamp.toString();
//        } else if ("WITHDRAW".equals(transactionType)) {
//
//            if (senderWalletId == null) {
//                throw new IllegalArgumentException("senderWalletId must be provided for WITHDRAW");
//            }
//            data = senderWalletId + amount + timestamp.toString();
//        }
//        else {
//            throw new IllegalArgumentException("Invalid transaction type");
//        }
//
//
//
//        return Integer.toHexString(data.hashCode());
//    }
//
//
//    public List<Transaction> getAllTransactions() {
//        return transactionRepository.findAll();
//    }
//
//
//    public List<Transaction> getTransactionsByWalletId(Long walletId) {
//        return transactionRepository.findBySenderWalletIdOrReceiverWalletId(walletId, walletId);
//    }
//
//    public Transaction getTransactionById(Long transactionId) {
//        return transactionRepository.findById(transactionId)
//                .orElseThrow(() -> new IllegalArgumentException("Transaction not found with ID: " + transactionId));
//    }
//}
