package org.example.Controller;



import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.bitcoinj.core.Coin;
import org.example.Service.BitcoinWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Bitcoin Wallet")
@Controller
@RequestMapping("/api/wallet")
public class BitcoinWalletController {

    @Autowired
    private BitcoinWalletService bitcoinWalletService;

    @Operation(
            summary = "Generează o adresă nouă pentru wallet",
            description = "Creează și returnează o adresă nouă pentru un portofel Bitcoin. Este utilă pentru generarea adreselor suplimentare pentru a primi plăți sau pentru alte scopuri.",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Adresa generată cu succes"
                    ),
                    @ApiResponse(
                            responseCode = "500",
                            description = "Eroare la generarea adresei"
                    )
            }
    )
    @PostMapping("/generate")
    @ResponseBody
    public String generateNewWallet() {
        String address = bitcoinWalletService.generateNewAdress();
        return address;
    }

    @Operation(
            summary = "Returnează balanța portefelului",
            description = "Permite obținerea balanței curente a portofelului Bitcoin"
    )
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
