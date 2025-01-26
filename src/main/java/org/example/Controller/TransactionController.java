//package org.example.Controller;
//
//import org.example.Entity.Transaction;
//import org.example.Service.TransactionService;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/transactions")
//public class TransactionController {
//
//    private final TransactionService transactionService;
//
//    public TransactionController(TransactionService transactionService) {
//        this.transactionService = transactionService;
//    }
//
//
//    @PostMapping("/transfer")
//    public ResponseEntity<Transaction> transfer(
//            @RequestParam Long senderWalletId,
//            @RequestParam Long receiverWalletId,
//            @RequestParam Double amount) {
//
//        Transaction transaction = transactionService.transfer(senderWalletId, receiverWalletId, amount);
//        return ResponseEntity.status(HttpStatus.CREATED).body(transaction);
//    }
//
//
//    @PostMapping("/withdraw")
//    public ResponseEntity<Transaction> withdraw(
//            @RequestParam Long walletId,
//            @RequestParam Double amount) {
//
//        Transaction transaction = transactionService.withdraw(walletId, amount);
//        return ResponseEntity.status(HttpStatus.OK).body(transaction);
//    }
//
//
//    @PostMapping("/deposit")
//    public ResponseEntity<Transaction> deposit(
//            @RequestParam Long walletId,
//            @RequestParam Double amount) {
//
//        Transaction transaction = transactionService.deposit(walletId, amount);
//        return ResponseEntity.status(HttpStatus.OK).body(transaction);
//    }
//
//
//    @GetMapping
//    public ResponseEntity<List<Transaction>> getAllTransactions() {
//        List<Transaction> transactions = transactionService.getAllTransactions();
//        if (transactions.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//        }
//        return ResponseEntity.ok(transactions);
//    }
//
//    @GetMapping("/wallet/{walletId}")
//    public ResponseEntity<List<Transaction>> getTransactionsByWalletId(@PathVariable Long walletId) {
//        List<Transaction> transactions = transactionService.getTransactionsByWalletId(walletId);
//        if (transactions.isEmpty()) {
//            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//        }
//        return ResponseEntity.ok(transactions);
//    }
//
//
//    @GetMapping("/{transactionId}")
//    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long transactionId) {
//        Transaction transaction = transactionService.getTransactionById(transactionId);
//        if (transaction != null) {
//            return ResponseEntity.ok(transaction);
//        }
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//    }
//}
