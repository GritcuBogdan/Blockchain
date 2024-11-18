package org.example.Controller;



import org.bitcoinj.core.Coin;
import org.example.Service.BitcoinWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/wallet")
public class BitcoinWalletController {

    @Autowired
    private BitcoinWalletService bitcoinWalletService;


    @PostMapping("/generate")
    @ResponseBody
    public String generateNewWallet() {
        String address = bitcoinWalletService.generateNewAdress();
        return address;
    }

    @GetMapping("/balance")
    @ResponseBody
    public String getBalance() {
        try {
            Coin balance = bitcoinWalletService.getBalance();
            return "Balance: " + balance.toFriendlyString();
        } catch (Exception e) {
            return "Error retrieving balance: " + e.getMessage();
        }
    }
    @PostMapping("/send")
    public String sendTransaction(@RequestParam String toAdress,@RequestParam double amount) throws Exception{
        Coin cointAmount = Coin.parseCoin(String.valueOf(amount));
        return bitcoinWalletService.sendTransaction(toAdress,cointAmount);
    }

    @PostMapping("/shutdown")
    public void shutdown()
    {
        bitcoinWalletService.shutdown();
    }

    @GetMapping("/")
    public String home(){
        return "index";
    }

}
