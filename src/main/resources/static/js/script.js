
async function generateNewWallet() {
    try {
        const response = await fetch('/api/wallet/generate', { method: 'POST' });
        const address = await response.text(); // Get the address as plain text
        document.getElementById("wallet-address").textContent = 'Wallet Address: ' + address;
    } catch (error) {
        console.error("Error generating wallet:", error);
        alert("Error generating wallet!");
    }
}

async function getBalance() {
    try {
        const response = await fetch('/api/wallet/balance');
        const balance = await response.text();
        document.getElementById("balance").textContent = balance;
    } catch (error) {
        console.error("Error fetching balance:", error);
        alert("Error fetching balance!");
    }
}


async function sendTransaction() {
    const toAddress = document.getElementById("send-to-address").value;
    const amount = document.getElementById("send-amount").value;


    if (!toAddress || !amount) {
        alert("Please fill in both recipient address and amount.");
        return;
    }

    try {
        const response = await fetch(`/api/wallet/send?toAddress=${toAddress}&amount=${amount}`, { method: 'POST' });
        const result = await response.text();
        document.getElementById("transaction-result").textContent = result;
    } catch (error) {
        console.error("Error sending transaction:", error);
        alert("Error sending transaction!");
    }
}
